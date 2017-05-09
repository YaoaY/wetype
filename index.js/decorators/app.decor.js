"use strict";
exports.__esModule = true;
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
