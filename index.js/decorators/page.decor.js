"use strict";
exports.__esModule = true;
function PageDeco(pageConfig) {
    return function (constr) {
        var proto = constr.prototype;
        if (typeof process !== 'undefined') {
            proto.pageConfig = pageConfig;
        }
        else {
            var instance = new constr;
            var methods = instance.methods, data_1 = instance.data;
            Object.assign(instance, methods);
            delete instance.methods;
            var onLoad_1 = instance.onLoad;
            instance.onLoad = function () {
                var _this = this;
                onLoad_1.call(this);
                var keys = Object.keys(data_1);
                var properties = {};
                var _loop_1 = function (k) {
                    properties[k] = {
                        set: function (v) {
                            _this.setData((_a = {}, _a[k] = v, _a));
                            var _a;
                        },
                        get: function () { return _this.data[k]; }
                    };
                };
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    _loop_1(k);
                }
                Object.defineProperties(this, properties);
            };
            Page(instance);
        }
    };
}
exports.PageDeco = PageDeco;
