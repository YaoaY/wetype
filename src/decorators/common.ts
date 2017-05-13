import { assign } from '../lib/util'
import { wxLib } from '../../typings/wetype'

export class WetypePage {
    protected data: any = {}
    protected methods: any = {}
}

export function handleComponents(
    components: wxLib.ComponentConstructor[] | undefined
): wxLib.ComponentParsed {
    components = components || []
    let data = {}
    let methods = {}
    let handlers = components.map(Com => {
        let handlers = Com.handlers
        assign(data, Com.data)
        assign(methods, handlers.methods)
        delete handlers.methods
        return handlers
    })
    return {
        data,
        methods,
        onLoad: () => handlers.forEach(ins => ins.onLoad && ins.onLoad()),
        onShow: () => handlers.forEach(ins => ins.onShow && ins.onShow()),
        onHide: () => handlers.forEach(ins => ins.onHide && ins.onHide()),
        onUnload: () => handlers.forEach(ins => ins.onUnload && ins.onUnload()),
    }
}