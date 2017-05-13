import { wxLib } from '../../typings/wetype'
import { wt } from '../lib/wx'
import { assign, getKeys } from '../lib/util'
import { handleComponents } from './common'

export function PageDecor(pageDecoConfig: wxLib.PageDecoConfig) {
    return function(constr: wxLib.PageConstructor) {
        let proto = constr.prototype
        if (typeof process !== 'undefined') {
            pageDecoConfig.components = pageDecoConfig.components || []
            proto.pageConfig = pageDecoConfig.pageConfig
            proto.components = pageDecoConfig.components.map(com => com.name)
        } else {
            let instance = new constr
            let componentsParsed = handleComponents(pageDecoConfig.components)
            let { methods } = instance
            // assign components' data to instance's data
            assign(instance.data, componentsParsed.data)
            // assign page's methods to instance
            assign(instance, methods)
            // assgin components' methods to instance
            assign(instance, componentsParsed.methods)
            // delelte the methods property on instance
            delete instance.methods
            let { onLoad, onShow, onHide, onUnload } = instance
            // rewrite instance's onLoad method
            instance.onLoad = function() {
                let keys = getKeys(instance.data)
                // call components' onLoad methods first
                componentsParsed.onLoad &&
                componentsParsed.onLoad.call(this)
                // call page' s onLoad method
                onLoad && onLoad.call(this)
                let properties = {}
                for (let k of keys) {
                    properties[k] = {
                        set: (v) => this.setData({ [k]: v }),
                        get: () => this.data[k]
                    }
                }
                // observer changes to this.data
                Object.defineProperties(this, properties)
            }
            // rewrite instance's onShow method
            instance.onShow = function () {
                componentsParsed.onShow &&
                componentsParsed.onShow.call(this)
                onShow && onShow.call(this)
            }
            // rewrite instance's onHide method
            instance.onHide = function () {
                componentsParsed.onHide &&
                componentsParsed.onHide.call(this)
                onHide && onHide.call(this)
            }
            // rewrite instance's onUnload method
            instance.onUnload = function () {
                componentsParsed.onUnload &&
                componentsParsed.onUnload.call(this)
                onUnload && onUnload.call(this)
            }
            // initialize page by calling Page function
            wt.Page(instance)
        }
    }
}
