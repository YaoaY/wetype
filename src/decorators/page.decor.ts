import { wetype } from '../../typings/wetype.new'
import { wt } from '../lib/wx'
import { inNode } from '../lib/util'
import { globalContext } from '../lib/context'
import { PageForExtend, PageForExtendConstructor } from '../lib/page'
import { ComponentForExtend, ComponentForExtendConstructor } from '../lib/component'

export interface PageDecorConfig {
    components?: ComponentForExtendConstructor[]
    pageConfig?: wetype.PageConifg
    data?: wetype.ObjectLiteral
}

export interface OriginalPageConfig extends wetype.PageBaseEvents {
    $page: PageForExtend
    data?: wetype.ObjectLiteral
    [handlers: string]: any
}

export function PageDecor(pageDecorConfig: PageDecorConfig) {
    return function(Constr: PageForExtendConstructor) {
        if (inNode) {
            pageDecorConfig.components = pageDecorConfig.components || []
            Constr.components = pageDecorConfig.components
            Constr.config = pageDecorConfig.pageConfig
        } else {
            let page = new Constr
            let config: OriginalPageConfig = { $page: page }
            page.$data = pageDecorConfig.data || {}
            globalContext.$instance.$pages[Constr.name] = page
            config.data = pageDecorConfig.data

            // handle components
            pageDecorConfig.components &&
            (config = handleComponents(config, page, pageDecorConfig.components, ''))
            
            config.onLoad = function (this: wetype.OriginalPageContext, ...args) {
                page.$name = Constr.name
                page.init(this, globalContext.$instance)

                page.onLoad && page.onLoad.call(page, ...args)
            }

            config.onShow = function (...args) {
                page.onShow && page.onShow.call(page, ...args)
            }
            // copy methods
            Object.getOwnPropertyNames(page.methods).forEach(m => {
                config[m] = function (...args) {
                    page.methods && page.methods[m].call(page, ...args)
                }
            })

            // initialize Page
            wt.Page(config)
        }
    }
}

const pageEvent = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage'];

function handleComponents (
    config: OriginalPageConfig,
    comIns: ComponentForExtend,
    components: ComponentForExtendConstructor[],
    prefix: string
) {
    comIns.$prefix = prefix
    components.forEach(Component => {
        let ins = new Component
        prefix = prefix ? `${prefix}${Component.name}$` : `$${Component.name}$`
        ins.$name = Component.name
        ins.$data = Component.data || {}
        comIns.$components[ins.$name] = ins
        handleComponents(config, ins, Component.components || [], prefix)
    })

    // handle other methods on Component or Page class
    // useless
    Object.getOwnPropertyNames(comIns.constructor.prototype || []).forEach(prop => {
        if (prop !== 'constructor' && pageEvent.indexOf(prop) === -1) {
            config[prop] = function (...args) {
                comIns.constructor.prototype[prop].call(comIns, ...args)
            }
        }
    })
    return config
}