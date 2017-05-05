"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wetype_1 = require("../wetype");
function AppDeco(appConfig) {
    return function (constructor) {
        if (typeof process !== 'undefined') {
            constructor.prototype.appConfig = appConfig;
        }
        else {
            wetype_1.App(constructor.prototype);
        }
    };
}
exports.AppDeco = AppDeco;
//# sourceMappingURL=app.decor.js.map