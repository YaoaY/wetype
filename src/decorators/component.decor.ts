import { wxLib } from '../../typings/wetype'
import { getRandom, getKeys, assign, inNode } from '../lib/util'
import { handleComponents } from './common'

export interface ComponentDecorOptions {
    components?: wxLib.ComponentConstructor[],
    data?: any,
    props?: any
}

export function ComponentDecor(
    componentDecorOptions: ComponentDecorOptions
) {
    return function (Constr: wxLib.ComponentConstructor): wxLib.ComponentConstructor {
        if (inNode) {
            return Constr
        } 
        let proto = Constr.prototype
        let name = proto.constructor.name || `$id$${getRandom()}`
        let componentsParsed = handleComponents(componentDecorOptions.components)
        // assign nested components' data to component's Constructor
        Constr.data = componentDecorOptions.data || {}
        assign(Constr.data, componentsParsed.data)
        // assign nested components' methods to component's prototype
        proto.methods = proto.methods || {}
        assign(proto.methods, componentsParsed.methods)
        let newData = {}
        let newMethods = {}
        // evaluate new data property names
        getKeys(Constr.data).forEach(key => {
            newData[`$${name}$${key}`] = Constr.data[key]
        })
        // evaluate new method property names
        getKeys(proto.methods).forEach(key => {
            newData[`$${name}$${key}`] = proto.methods[key]
        })
        // replace instance.methods with new new methods
        proto.methods = newMethods
        Constr.data = newData
        Constr.prototype = proto
        return Constr
    }
}