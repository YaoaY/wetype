"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../lib/wx");
const context_1 = require("../lib/context");
function AppDecor(appConfig) {
    return function (Constr) {
        if (typeof process !== 'undefined') {
            Constr.prototype.appConfig = appConfig;
        }
        else {
            let app = new Constr;
            app.$wxapp = wx_1.wt.getApp();
            if (!context_1.globalContext.$instance) {
                app.init(context_1.globalContext);
                context_1.globalContext.$instance = app;
            }
            let config = {
                $app: app,
                onLaunch(...args) {
                    app.onLaunch && app.onLaunch.call(context_1.globalContext, ...args);
                },
                onShow(...args) {
                    app.onShow && app.onShow.call(context_1.globalContext);
                },
            };
            wx_1.wt.App(config);
        }
    };
}
exports.AppDecor = AppDecor;
//# sourceMappingURL=app.decor.js.map