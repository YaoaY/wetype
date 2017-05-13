"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../lib/wx");
const util_1 = require("../lib/util");
const common_1 = require("./common");
function PageDecor(pageDecoConfig) {
    return function (Constr) {
        // let proto = Constr.prototype
        if (util_1.inNode) {
            pageDecoConfig.components = pageDecoConfig.components || [];
            Constr.components = pageDecoConfig.components.map(Consr => Consr.name);
            Constr.config = pageDecoConfig.pageConfig;
        }
        else {
            let instance = new Constr;
            let { data, components } = pageDecoConfig;
            data = data || {};
            let componentsParsed = common_1.handleComponents(components);
            let { handlers } = componentsParsed;
            // console.log(componentsParsed)
            // let { methods } = instance
            // methods = methods || {}
            // assign components' data to instance's data
            util_1.assign(data, componentsParsed.data);
            // assign page's methods to instance
            // assign(instance, methods)
            // assgin components' methods to instance
            // assign(instance, componentsParsed.methods)
            // assign data to proto.data
            instance.data = data;
            // delelte the methods property on instance
            delete instance.methods;
            let { onLoad, onShow, onHide, onUnload } = instance;
            // delete instance
            // instance = {}
            // rewrite instance's onLoad method
            instance.onLoad = function () {
                let keys = util_1.getKeys(instance.data);
                let properties = {};
                for (let k of keys) {
                    properties[k] = {
                        set: (v) => this.setData({ [k]: v }),
                        get: () => this.data[k]
                    };
                }
                // observer changes to this.data
                Object.defineProperties(this, properties);
                // call components' onLoad methods first
                handlers.onLoad &&
                    handlers.onLoad.call(this);
                // call page' s onLoad method
                onLoad && onLoad.call(this);
            };
            // rewrite instance's onShow method
            instance.onShow = function () {
                handlers.onShow &&
                    handlers.onShow.call(this);
                onShow && onShow.call(this);
            };
            // rewrite instance's onHide method
            instance.onHide = function () {
                handlers.onHide &&
                    handlers.onHide.call(this);
                onHide && onHide.call(this);
            };
            // rewrite instance's onUnload method
            instance.onUnload = function () {
                handlers.onUnload &&
                    handlers.onUnload.call(this);
                onUnload && onUnload.call(this);
            };
            // initialize page by calling Page function
            wx_1.wt.Page(instance);
        }
    };
}
exports.PageDecor = PageDecor;
//# sourceMappingURL=page.decor.js.map