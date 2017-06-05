/**
 * page.decor.ts
 * this file exports Page decorator
 * 
 * @author Kai Shao
 * @copyright open source
 */

import { wetype } from '../../typings/wetype.new'
import { wt } from '../lib/wx'
import { inNode } from '../lib/util'
import { globalContext } from '../lib/context'
import { $Page, $PageConstructor } from '../lib/page'
import { $Component, $ComponentConstructor } from '../lib/component'
import { sep } from '../lib/config'
import { getDataFromInstance, getMethodsFromInstance } from './common'


/**
 * config of decoration for page
 * 
 * @export
 * @interface PageDecorConfig
 */
export interface PageDecorConfig {
    /**
     * array of components of the page
     * 
     * @type {$ComponentConstructor[]}
     * @memberof PageDecorConfig
     */
    components?: {
        [componentName: string]: $ComponentConstructor
    }
    /**
     * native page config
     * 
     * @type {wetype.PageConifg}
     * @memberof PageDecorConfig
     */
    pageConfig?: wetype.PageConifg

    template?: string
    templateUrl?: string
}

/**
 * config that is called by native Page()
 * 
 * @export
 * @interface OriginalPageConfig
 * @extends {wetype.PageBaseEvents}
 */
export interface OriginalPageConfig extends wetype.PageBaseEvents {
    $page: $Page
    data?: wetype.ObjectLiteral
    [handlers: string]: any
}

/**
 * decoration for every single page
 * 
 * @export
 * @param {PageDecorConfig} pageDecorConfig 
 * @returns 
 */
export function PageDecor(pageDecorConfig: PageDecorConfig) {
    return function (PageConstructor: $PageConstructor) {
        if (inNode) {
            /**
             * expose page config for build use in NodeJS
             */
            pageDecorConfig.components = pageDecorConfig.components || {}
            // PageConstructor.components = pageDecorConfig.components
            PageConstructor.config = pageDecorConfig.pageConfig
            PageConstructor.template = pageDecorConfig.template
            PageConstructor.templateUrl = pageDecorConfig.templateUrl
        } else {

            // instantiate Page Constructor
            let page = new PageConstructor

            // initialize config and assign $page
            let config: OriginalPageConfig = { $page: page }

            // assign initail data to page instance
            page.$data = getDataFromInstance(page)

            // assign this page to global context
            globalContext.$instance.$pages[PageConstructor.name] = page

            // handle components, assign the return value to config
            config = handleComponents(config, page, pageDecorConfig.components || {}, `${sep}${PageConstructor.name}${sep}`)

            // rewrite the real onLoad event handler
            config.onLoad = function (this: wetype.OriginalPageContext, ...args) {

                // assign construtor's name to $name
                page.$name = PageConstructor.name

                // call the initialzation method with the real context & global context 
                page.init(this, globalContext.$instance)

                // call onLoad
                page.onLoad && page.onLoad.call(page, ...args)
            }

            // similarly rewrite real onShow event handler
            config.onShow = function (...args) {

                // call onShow
                page.onShow && page.onShow.call(page, ...args)
            }
            // copy methods
            // Object.getOwnPropertyNames(page.methods).forEach(m => {
            //     config[m] = function (...args) {
            //         page.methods && page.methods[m].call(page, ...args)
            //     }
            // })

            // initialize Page
            wt.Page(config)
        }
    }
}

/**
 * handle components recursively
 * 
 * @param {OriginalPageConfig} config config that is called by native Page()
 * @param {$Component} comIns component instance, either Component or Page
 * @param {$ComponentConstructor[]} components array of cunstructor of components that is inherited by the component
 * @param {string} prefix component prefix, for example `$Component`
 * @returns {OriginalPageConfig}
 */
function handleComponents(
    config: OriginalPageConfig,
    comIns: $Component,
    components: {
        [componentName: string]: $ComponentConstructor 
    },
    prefix: string
): OriginalPageConfig {

    // assign prefix to the parent component
    comIns.$prefix = prefix

    // iterate components inherited from parent component
    Object.keys(components).forEach(name => {

        let Component = components[name]

        // instantiate each child component
        let ins = new Component

        // evalute prefix 
        prefix = prefix ? `${prefix}${name}${sep}` : `${sep}${name}${sep}`

        //assign $name and $data
        ins.$name = name
        ins.$data = getDataFromInstance(ins)

        // assign this child component instance to its parent component
        comIns.$components[ins.$name] = ins

        // recursively handle child components until there are no child components
        handleComponents(config, ins, Component.components || {}, prefix)
    })

    // assign methods
    Object.assign(config, getMethodsFromInstance(comIns))

    return config
}