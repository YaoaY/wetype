import { wxLib } from '../../typings/wetype'
import { wt } from '../lib/wx'

export function AppDeco(appConfig: wxLib.AppConfig) {
    return function (constructor: Function) {
        if (typeof process !== 'undefined') {
            constructor.prototype.appConfig = appConfig
        } else {
            wt.App(constructor.prototype)
        }
    }
}