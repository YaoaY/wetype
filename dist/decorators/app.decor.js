"use strict";
/**
 * app.decor.ts
 *
 * @author Kai Shao
 * @copyright open source
 */
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../lib/wx");
const util_1 = require("../lib/util");
const context_1 = require("../lib/context");
/**
 * decoration for App class
 *
 * @export
 * @param {wxLib.AppConfig} appConfig
 * @returns void
 */
function AppDecor(appConfig) {
    return function (AppConstructor) {
        if (util_1.inNode) {
            /**
             * expose app config for build use in NodeJS
             */
            AppConstructor.prototype.appConfig = appConfig;
        }
        else {
            // instantiate App Constructor
            let app = new AppConstructor;
            // assign the native app context to $wxapp
            app.$wxapp = wx_1.wt.getApp();
            if (!context_1.globalContext.$instance) {
                // initialize app if global context not exist
                app.init(context_1.globalContext);
                context_1.globalContext.$instance = app;
            }
            // assign the app config
            let config = {
                $app: app,
                onLaunch(...args) {
                    app.onLaunch && app.onLaunch.call(context_1.globalContext, ...args);
                },
                onShow(...args) {
                    app.onShow && app.onShow.call(context_1.globalContext);
                },
            };
            // initialize
            wx_1.wt.App(config);
        }
    };
}
exports.AppDecor = AppDecor;
//# sourceMappingURL=app.decor.js.map