import { wxLib } from '../../typings/wetype'
import { wt } from '../lib/wx'
import { assign, getKeys, inNode } from '../lib/util'
import { handleComponents } from './common'

export function PageDecor(pageDecoConfig: wxLib.PageDecoConfig) {
    return function(Constr: wxLib.PageConstructor) {
        let proto = Constr.prototype
        if (inNode) {
            pageDecoConfig.components = pageDecoConfig.components || []
            Constr.components = pageDecoConfig.components.map(Consr => Consr.name)
            Constr.config = pageDecoConfig.pageConfig
        } else {
            let { data, components } = pageDecoConfig
            data = data || {}
            let componentsParsed = handleComponents(components)
            console.log(componentsParsed)
            // let { methods } = proto
            // methods = methods || {}
            // assign components' data to instance's data
            assign(data, componentsParsed.data)
            // assign page's methods to instance
            // assign(proto, methods)
            // assgin components' methods to instance
            assign(proto, componentsParsed.methods)
            // assign data to proto.data
            proto.data = data
            // delelte the methods property on instance
            // delete proto.methods
            let { onLoad, onShow, onHide, onUnload } = proto
            // rewrite instance's onLoad method
            proto.onLoad = function() {
                let keys = getKeys(proto.data)
                let properties = {}
                for (let k of keys) {
                    properties[k] = {
                        set: (v) => this.setData({ [k]: v }),
                        get: () => this.data[k]
                    }
                }
                // observer changes to this.data
                Object.defineProperties(this, properties)
                // call components' onLoad methods first
                componentsParsed.onLoad &&
                componentsParsed.onLoad.call(this)
                // call page' s onLoad method
                onLoad && onLoad.call(this)
            }
            // rewrite proto's onShow method
            proto.onShow = function () {
                componentsParsed.onShow &&
                componentsParsed.onShow.call(this)
                onShow && onShow.call(this)
            }
            // rewrite proto's onHide method
            proto.onHide = function () {
                componentsParsed.onHide &&
                componentsParsed.onHide.call(this)
                onHide && onHide.call(this)
            }
            // rewrite proto's onUnload method
            proto.onUnload = function () {
                componentsParsed.onUnload &&
                componentsParsed.onUnload.call(this)
                onUnload && onUnload.call(this)
            }
            // initialize page by calling Page function
            wt.Page(proto)
        }
    }
}
