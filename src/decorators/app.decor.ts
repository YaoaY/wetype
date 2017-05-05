import { App } from '../wetype'

export function AppDeco(appConfig) {
    return function (constructor: Function) {
        if (typeof process !== 'undefined') {
            constructor.prototype.appConfig = appConfig
        } else {
            App(constructor.prototype)
        }
    }
}