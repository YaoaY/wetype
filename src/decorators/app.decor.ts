import { wxLib } from '../../typings/wetype'
import { wetype } from '../../typings/wetype.new'
import { wt } from '../lib/wx'
import { globalContext } from '../lib/context'

export function AppDecor(appConfig: wxLib.AppConfig) {
    return function (Constr: wetype.AppConstructor) {
        if (typeof process !== 'undefined') {
            Constr.prototype.appConfig = appConfig
        } else {
            let app = new Constr
            app.$wxapp = wt.getApp()
            if (!globalContext.$instance) {
                app.init(globalContext)
                globalContext.$instance = app
            }
            let config: wetype.OriginalAppConfig = {
                $app: app,
                onLaunch (...args) {
                    app.onLaunch && app.onLaunch.call(globalContext, ...args) 
                },
                onShow (...args) {
                    app.onShow && app.onShow.call(globalContext)
                },
            }
            wt.App(config)
        }
    }
}