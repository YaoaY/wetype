/**
 * app.decor.ts
 * 
 * @author Kai Shao
 * @copyright open source
 */

import { wxLib } from '../../typings/wetype'
import { wetype } from '../../typings/wetype.new'
import { wt } from '../lib/wx'
import { inNode } from '../lib/util'
import { globalContext } from '../lib/context'
import { AppForExtendConstructor, AppForExtend } from '../lib/app'

/**
 * config for decoration for app
 * 
 * @export
 * @interface OriginalAppConfig
 * @extends {wetype.AppBaseEvents}
 */
export interface OriginalAppConfig extends wetype.AppBaseEvents {
    $app: AppForExtend
}

/**
 * decoration for App class
 * 
 * @export
 * @param {wxLib.AppConfig} appConfig 
 * @returns void
 */
export function AppDecor(appConfig: wxLib.AppConfig) {
    return function (AppConstructor: AppForExtendConstructor) {
        if (inNode) {
            /**
             * expose app config for build use in NodeJS
             */
            AppConstructor.prototype.appConfig = appConfig
        } else {

            // instantiate App Constructor
            let app = new AppConstructor

            // assign the native app context to $wxapp
            app.$wxapp = wt.getApp()


            if (!globalContext.$instance) {
                
                // initialize app if global context not exist
                app.init(globalContext)
                globalContext.$instance = app
            }

            // assign the app config
            let config: OriginalAppConfig = {
                $app: app,
                onLaunch (...args) {
                    app.onLaunch && app.onLaunch.call(globalContext, ...args) 
                },
                onShow (...args) {
                    app.onShow && app.onShow.call(globalContext)
                },
            }

            // initialize
            wt.App(config)
        }
    }
}