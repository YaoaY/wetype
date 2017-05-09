import { wxLib } from '../../typings/wetype'
import { wt } from '../lib/wx'

export function PageDeco(pageConfig: wxLib.PageConifg) {
    return function(constr) {
        let proto = constr.prototype
        if (typeof process !== 'undefined') {
            proto.pageConfig = pageConfig
        } else {
            let instance = new constr
            let { methods, data } = instance
            Object.assign(instance, methods)
            delete instance.methods
            let onLoad = instance.onLoad
            instance.onLoad = function() {
                onLoad.call(this)
                let keys = Object.keys(data)
                let properties = {}
                for (let k of keys) {
                    properties[k] = {
                        set: (v) => {
                            this.setData({ [k]: v })
                        },
                        get: () => this.data[k]
                    }
                }
                Object.defineProperties(this, properties)
            }
            wt.Page(instance)
        }
    }
}