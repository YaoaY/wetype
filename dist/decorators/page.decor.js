"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../lib/wx");
const util_1 = require("../lib/util");
const common_1 = require("./common");
function PageDecor(pageDecoConfig) {
    return function (Constr) {
        let proto = Constr.prototype;
        if (util_1.inNode) {
            pageDecoConfig.components = pageDecoConfig.components || [];
            Constr.components = pageDecoConfig.components.map(Consr => Consr.name);
            Constr.config = pageDecoConfig.pageConfig;
        }
        else {
            let { data, components } = pageDecoConfig;
            data = data || {};
            let componentsParsed = common_1.handleComponents(components);
            console.log(componentsParsed);
            let { methods } = proto;
            methods = methods || {};
            // assign components' data to instance's data
            util_1.assign(data, componentsParsed.data);
            // assign page's methods to instance
            util_1.assign(proto, methods);
            // assgin components' methods to instance
            util_1.assign(proto, componentsParsed.methods);
            // assign data to proto.data
            proto.data = data;
            // delelte the methods property on instance
            delete proto.methods;
            let { onLoad, onShow, onHide, onUnload } = proto;
            // rewrite instance's onLoad method
            proto.onLoad = function () {
                let keys = util_1.getKeys(proto.data);
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
                componentsParsed.onLoad &&
                    componentsParsed.onLoad.call(this);
                // call page' s onLoad method
                onLoad && onLoad.call(this);
            };
            // rewrite proto's onShow method
            proto.onShow = function () {
                componentsParsed.onShow &&
                    componentsParsed.onShow.call(this);
                onShow && onShow.call(this);
            };
            // rewrite proto's onHide method
            proto.onHide = function () {
                componentsParsed.onHide &&
                    componentsParsed.onHide.call(this);
                onHide && onHide.call(this);
            };
            // rewrite proto's onUnload method
            proto.onUnload = function () {
                componentsParsed.onUnload &&
                    componentsParsed.onUnload.call(this);
                onUnload && onUnload.call(this);
            };
            // initialize page by calling Page function
            wx_1.wt.Page(proto);
        }
    };
}
exports.PageDecor = PageDecor;
//# sourceMappingURL=page.decor.js.map