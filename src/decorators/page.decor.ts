import { wxLib } from '../../typings/wetype'
import { wt } from '../lib/wx'

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
            Object.assign(instance.data, componentsParsed.data)
            // assign page's methods to instance
            Object.assign(instance, methods)
            // assgin components' methods to instance
            Object.assign(instance, componentsParsed.methods)
            // delelte the methods property on instance
            delete instance.methods
            let { onLoad, onShow, onHide, onUnload } = instance
            // rewrite instance's onLoad method
            instance.onLoad = function() {
                let keys = Object.keys(instance.data)
                // call components' onLoad methods first
                componentsParsed.onLoad.call(this)
                // call page' s onLoad method
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
                // observer changes to this.data
                Object.defineProperties(this, properties)
            }
            // rewrite instance's onShow method
            instance.onShow = function () {
                componentsParsed.onShow.call(this)
                onShow && onShow.call(this)
            }
            // rewrite instance's onHide method
            instance.onHide = function () {
                
                componentsParsed.onHide.call(this)
                onHide && onHide.call(this)
            }
            // rewrite instance's onUnload method
            instance.onUnload = function () {
                componentsParsed.onUnload.call(this)
                onUnload && onUnload.call(this)
            }
            // initialize page by calling Page function
            wt.Page(instance)
        }
    }
}

export interface ComponentsParsed {
    data: any,
    methods: {
        [methods: string]: () => any
    },
    onLoad: () => void,
    onShow: () => void,
    onHide: () => void,
    onUnload: () => void
}

function handleComponents (
    components: wxLib.Component[] | undefined
): ComponentsParsed {
    components = components || []
    let comData = {}
    let methods = {}
    let instances = components.map(com => {
        let { data, instance } = com
        Object.assign(comData, data)
        Object.assign(methods, instance.methods)
        delete instance.methods
        return instance
    })
    return {
        data: comData,
        methods,
        onLoad: () => instances.forEach(ins => ins.onLoad && ins.onLoad()),
        onShow: () => instances.forEach(ins => ins.onShow && ins.onShow()),
        onHide: () => instances.forEach(ins => ins.onHide && ins.onHide()),
        onUnload: () => instances.forEach(ins => ins.onUnload && ins.onUnload()),
    }
}