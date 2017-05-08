"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wetype_1 = require("../typings/wetype");
function PageDeco(pageConfig) {
    return function (constr) {
        let proto = constr.prototype;
        if (typeof process !== 'undefined') {
            proto.pageConfig = pageConfig;
        }
        else {
            let instance = new constr;
            let { methods, data } = instance;
            Object.assign(instance, methods);
            delete instance.methods;
            let onLoad = instance.onLoad;
            instance.onLoad = function () {
                onLoad.call(this);
                let keys = Object.keys(data);
                let properties = {};
                for (let k of keys) {
                    properties[k] = {
                        set: (v) => {
                            this.setData({ [k]: v });
                        },
                        get: () => this.data[k]
                    };
                }
                Object.defineProperties(this, properties);
            };
            wetype_1.Page(instance);
        }
    };
}
exports.PageDeco = PageDeco;
//# sourceMappingURL=page.decor.js.map