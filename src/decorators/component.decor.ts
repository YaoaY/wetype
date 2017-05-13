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
        let instance = new Constr
        let name = proto.constructor.name || `$id$${getRandom()}`
        let componentsParsed = handleComponents(componentDecorOptions.components)
        // assign nested components' data to component's Constructor
        Constr.data = componentDecorOptions.data || {}
        assign(Constr.data, componentsParsed.data)
        // assign nested components' methods to component's prototype
        instance.methods = instance.methods || {}
        assign(instance.methods, componentsParsed.methods)
        let newData = {}
        let newMethods = {}
        // evaluate new data property names
        getKeys(Constr.data).forEach(key => {
            newData[`$${name}$${key}`] = Constr.data[key]
        })
        // evaluate new method property names
        if (instance.methods) {
            getKeys(instance.methods).forEach(key => {
                newMethods[`$${name}$${key}`] = instance.methods[key]
            })
        }
        // replace instance.methods with new new methods
        instance.methods = newMethods
        Constr.data = newData
        Constr.handlers = instance
        Constr.prototype = { constructor: Constr, methods: {} }
        return Constr
    }
}