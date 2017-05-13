import { assign } from '../lib/util'
import { wxLib } from '../../typings/wetype'

export function handleComponents (
    components: wxLib.ComponentConstructor[] | undefined
): wxLib.ComponentMethods {
    components = components || []
    let data = {}
    let methods = {}
    let instances = components.map(com => {
        let instance = com.prototype
        assign(data, instance.data)
        assign(methods, instance.methods)
        delete instance.methods
        return instance
    })
    return {
        data,
        methods,
        onLoad: () => instances.forEach(ins => ins.onLoad && ins.onLoad()),
        onShow: () => instances.forEach(ins => ins.onShow && ins.onShow()),
        onHide: () => instances.forEach(ins => ins.onHide && ins.onHide()),
        onUnload: () => instances.forEach(ins => ins.onUnload && ins.onUnload()),
    }
}