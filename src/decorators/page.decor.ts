import { wxLib } from '../../typings/wetype'
import { wt } from '../lib/wx'

export function PageDeco(pageDecoConfig: wxLib.PageDecoConfig) {
    return function(constr: wxLib.PageConstructor) {
        let proto = constr.prototype
        if (typeof process !== 'undefined') {
            pageDecoConfig.components = pageDecoConfig.components || []
            proto.pageConfig = pageDecoConfig.pageConfig
            proto.components = pageDecoConfig.components.map(com => com.name)
        } else {
            let instance = new constr
            let { components } = pageDecoConfig
            let componentsParsed = handleComponent(components)
            let { methods, data } = instance
            Object.assign(instance, methods)
            delete instance.methods
            let { onLoad, onShow, onHide, onUnload } = instance
            instance.onLoad = function() {
                let keys = Object.keys(data)
                Object.assign(keys, componentsParsed.data)
                componentsParsed.onLoad.call(this)
                onLoad && onLoad.call(this)
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
            instance.onShow = function () {
                componentsParsed.onShow.call(this)
                onShow && onShow.call(this)
            }
            instance.onHide = function () {
                componentsParsed.onHide.call(this)
                onHide && onHide.call(this)
            }
            instance.onUnload = function () {
                componentsParsed.onUnload.call(this)
                onUnload && onUnload.call(this)
            }
            wt.Page(instance)
        }
    }
}

function handleComponent (components: wxLib.Component[] | undefined) {
    components = components || []
    let comData = {} 
    let instances = components.map(com => {
        let { data, instance } = com
        Object.assign(comData, data)
        return instance
    })
    return {
        data: comData,
        onLoad: () => instances.forEach(ins => ins.onLoad && ins.onLoad()),
        onShow: () => instances.forEach(ins => ins.onShow && ins.onShow()),
        onHide: () => instances.forEach(ins => ins.onHide && ins.onHide()),
        onUnload: () => instances.forEach(ins => ins.onUnload && ins.onUnload()),
    }
}