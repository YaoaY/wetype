"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../lib/wx");
const util_1 = require("../lib/util");
const context_1 = require("../lib/context");
function PageDecor(pageDecoConfig) {
    return function (Constr) {
        if (util_1.inNode) {
            pageDecoConfig.components = pageDecoConfig.components || [];
            Constr.components = pageDecoConfig.components.map(Consr => Consr.name);
            Constr.config = pageDecoConfig.pageConfig;
        }
        else {
            let page = new Constr;
            let config = { $page: page };
            context_1.globalContext.$instance.$pages[Constr.name] = page;
            config.data = pageDecoConfig.data;
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
                    page.methods && page.methods[m].call(context_1.globalContext.$instance.$pages[Constr.name], ...args);
                };
            });
            // initialize Page
            wx_1.wt.Page(config);
        }
    };
}
exports.PageDecor = PageDecor;
//# sourceMappingURL=page.decor.js.map