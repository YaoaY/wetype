import { assign } from '../lib/util'
import { wxLib } from '../../typings/wetype'

export function handleComponents (
    components: wxLib.ComponentConstructor[] | undefined
): wxLib.ComponentParsed {
    components = components || []
    let data = {}
    let methods = {}
    let proto = components.map(Com => {
        let proto = Com.prototype
        assign(data, Com.data)
        assign(methods, proto.methods)
        delete proto.methods
        return proto
    })
    return {
        data,
        methods,
        onLoad: () => proto.forEach(ins => ins.onLoad && ins.onLoad()),
        onShow: () => proto.forEach(ins => ins.onShow && ins.onShow()),
        onHide: () => proto.forEach(ins => ins.onHide && ins.onHide()),
        onUnload: () => proto.forEach(ins => ins.onUnload && ins.onUnload()),
    }
}