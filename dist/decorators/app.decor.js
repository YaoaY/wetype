"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../lib/wx");
function AppDeco(appConfig) {
    return function (constructor) {
        if (typeof process !== 'undefined') {
            constructor.prototype.appConfig = appConfig;
        }
        else {
            wx_1.wt.App(constructor.prototype);
        }
    };
}
exports.AppDeco = AppDeco;
//# sourceMappingURL=app.decor.js.map