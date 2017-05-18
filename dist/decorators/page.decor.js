"use strict";
/**
 * page.decor.ts
 * this file exports Page decorator
 *
 * @author Kai Shao
 * @copyright open source
 */
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../lib/wx");
const util_1 = require("../lib/util");
const context_1 = require("../lib/context");
const config_1 = require("../lib/config");
/**
 * decoration for every single page
 *
 * @export
 * @param {PageDecorConfig} pageDecorConfig
 * @returns
 */
function PageDecor(pageDecorConfig) {
    return function (PageConstructor) {
        if (util_1.inNode) {
            /**
             * expose page config for build use in NodeJS
             */
            pageDecorConfig.components = pageDecorConfig.components || [];
            PageConstructor.components = pageDecorConfig.components;
            PageConstructor.config = pageDecorConfig.pageConfig;
        }
        else {
            // instantiate Page Constructor
            let page = new PageConstructor;
            // initialize config and assign $page
            let config = { $page: page };
            // assign initail data to page instance
            page.$data = pageDecorConfig.data || {};
            // assign this page to global context
            context_1.globalContext.$instance.$pages[PageConstructor.name] = page;
            // handle components, assign the return value to config
            config = handleComponents(config, page, pageDecorConfig.components || [], `${config_1.sep}${PageConstructor.name}${config_1.sep}`);
            // rewrite the real onLoad event handler
            config.onLoad = function (...args) {
                // assign construtor's name to $name
                page.$name = PageConstructor.name;
                // call the initialzation method with the real context & global context 
                page.init(this, context_1.globalContext.$instance);
                // call onLoad
                page.onLoad && page.onLoad.call(page, ...args);
            };
            // similarly rewrite real onShow event handler
            config.onShow = function (...args) {
                // call onShow
                page.onShow && page.onShow.call(page, ...args);
            };
            // copy methods
            // Object.getOwnPropertyNames(page.methods).forEach(m => {
            //     config[m] = function (...args) {
            //         page.methods && page.methods[m].call(page, ...args)
            //     }
            // })
            // initialize Page
            wx_1.wt.Page(config);
        }
    };
}
exports.PageDecor = PageDecor;
/**
 * native pageEvents
 */
// const pageEvent = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage'];
/**
 * handle components recursively
 *
 * @param {OriginalPageConfig} config config that is called by native Page()
 * @param {$Component} comIns component instance, either Component or Page
 * @param {$ComponentConstructor[]} components array of cunstructor of components that is inherited by the component
 * @param {string} prefix component prefix, for example `$Component`
 * @returns {OriginalPageConfig}
 */
function handleComponents(config, comIns, components, prefix) {
    // assign prefix to the parent component
    comIns.$prefix = prefix;
    // iterate components inherited from parent component
    components.forEach(Component => {
        // instantiate each child component
        let ins = new Component;
        // evalute prefix 
        prefix = prefix ? `${prefix}${Component.name}${config_1.sep}` : `${config_1.sep}${Component.name}${config_1.sep}`;
        //assign $name and $data
        ins.$name = Component.name;
        ins.$data = Component.data || {};
        // assign this child component instance to its parent component
        comIns.$components[ins.$name] = ins;
        // recursively handle child components until there are no child components
        handleComponents(config, ins, Component.components || [], prefix);
    });
    // handle custom event methods in each component
    Object.getOwnPropertyNames(comIns.methods).forEach(methodName => {
        // evaluate prefix
        let prefix = comIns.$prefix + methodName;
        // store the original method
        let method = comIns.methods[methodName];
        // set custom event handler to config
        config[prefix] = function (e, ...args) {
            // call the method on the context of this component, change its first argument
            // to dataset
            method.call(comIns, e.currentTarget.dataset, e, ...args);
        };
    });
    /**
     *  handle other methods on Component or Page class
     *  currently useless
     *
        Object.getOwnPropertyNames(comIns.constructor.prototype || []).forEach(prop => {
            if (prop !== 'constructor' && pageEvent.indexOf(prop) === -1) {
                config[prop] = function (...args) {
                    comIns.constructor.prototype[prop].call(comIns, ...args)
                }
            }
        })
     *
     */
    return config;
}
//# sourceMappingURL=page.decor.js.map