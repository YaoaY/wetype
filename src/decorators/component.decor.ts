import { wxLib } from '../../typings/wetype'

export function ComponentDecor(
    componentsName: wxLib.ComponentName[]
) {
    return function (target): wxLib.Component {
        let { name } = target.prototype.constructor
        let instance = new target
        let { methods, data } = instance
        let keys = Object.keys(data)
        let newData = {}
        let newMethods = {}
        keys.forEach(key => {
            newData[`$${name}$${key}`] = data[key]
        })
        Object.keys(methods).forEach(key => {
            newData[`$${name}$${key}`] = methods[key]
        })
        instance.methods = newMethods
        return {
            name,
            data: newData,
            instance
        }
    }
}