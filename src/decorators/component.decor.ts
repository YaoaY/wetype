import { wxLib } from '../../typings/wetype'
import { getRandom, getKeys, assign } from '../lib/util'
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
        let proto = Constr.prototype
        let name = proto.constructor.name || `$id$${getRandom()}`
        let instance = new Constr
        let componentsParsed = handleComponents(componentDecorOptions.components)
        // assign nested components' data to component's instance
        assign(instance.data, componentsParsed.data)
        // assign nested components' methods to component's instance
        assign(instance.methods, componentsParsed.methods)
        let { methods, data } = instance
        let newData = {}
        let newMethods = {}
        // evaluate new data property names
        getKeys(data).forEach(key => {
            newData[`$${name}$${key}`] = data[key]
        })
        // evaluate new method property names
        getKeys(methods).forEach(key => {
            newData[`$${name}$${key}`] = methods[key]
        })
        // replace instance.methods with new new methods
        instance.methods = newMethods
        instance.data = newData
        Constr.prototype = instance
        return Constr
    }
}