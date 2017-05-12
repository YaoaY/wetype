import { assign, getKeys } from '../lib/util'
import { wxLib } from '../../typings/wetype'

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

export function handleComponents (
    components: wxLib.Component[] | undefined
): ComponentsParsed {
    components = components || []
    let comData = {}
    let methods = {}
    let instances = components.map(com => {
        let { data, instance } = com
        assign(comData, data)
        assign(methods, instance.methods)
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