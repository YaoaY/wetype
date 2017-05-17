"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../lib/wx");
const util_1 = require("../lib/util");
const context_1 = require("../lib/context");
function PageDecor(pageDecorConfig) {
    return function (Constr) {
        if (util_1.inNode) {
            pageDecorConfig.components = pageDecorConfig.components || [];
            Constr.components = pageDecorConfig.components;
            Constr.config = pageDecorConfig.pageConfig;
        }
        else {
            let page = new Constr;
            let config = { $page: page };
            context_1.globalContext.$instance.$pages[Constr.name] = page;
            config.data = pageDecorConfig.data;
            // handle components
            pageDecorConfig.components &&
                (config = handleComponents(config, page, pageDecorConfig.components));
            config.onLoad = function (...args) {
                page.$name = Constr.name;
                page.init(this, context_1.globalContext.$instance);
                page.onLoad && page.onLoad.call(page, ...args);
            };
            config.onShow = function (...args) {
                page.onShow && page.onShow.call(page, ...args);
            };
            // copy methods
            util_1.getProperties(page.methods).forEach(m => {
                config[m] = function (...args) {
                    page.methods && page.methods[m].call(page, ...args);
                };
            });
            // initialize Page
            wx_1.wt.Page(config);
        }
    };
}
exports.PageDecor = PageDecor;
const pageEvent = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage'];
function handleComponents(config, comIns, components, prefix) {
    components.forEach(Component => {
        let ins = new Component;
        ins.$name = Component.name;
        let comPrefix = prefix ? `${prefix}${ins.$name}$` : `$${ins.$name}$`;
        comIns.$com[ins.$name] = ins;
        Component.components &&
            handleComponents(config, comIns, Component.components, comPrefix);
    });
    Object.getOwnPropertyNames(comIns.constructor.prototype || []).forEach(prop => {
        if (prop !== 'constructor' && pageEvent.indexOf(prop) === -1) {
            config[prop] = function (...args) {
                comIns.constructor.prototype[prop].call(comIns, ...args);
            };
        }
    });
    return config;
}
//# sourceMappingURL=page.decor.js.map