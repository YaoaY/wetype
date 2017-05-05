"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AppDeco(appConfig) {
    return function (constructor) {
        if (typeof process !== 'undefined') {
            constructor.prototype.appConfig = appConfig;
        }
        else {
            App(constructor.prototype);
        }
    };
}
exports.AppDeco = AppDeco;
//# sourceMappingURL=app.decor.js.map