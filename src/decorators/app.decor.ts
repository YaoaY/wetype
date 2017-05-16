import { wxLib } from '../../typings/wetype'
import { wt } from '../lib/wx'
import { App } from '../lib/app'

export function AppDecor(appConfig: wxLib.AppConfig) {
    return function (constructor: Function) {
        if (typeof process !== 'undefined') {
            constructor.prototype.appConfig = appConfig
        } else {
            wt.App(constructor.prototype)
        }
    }
}