import { wxLib } from '../../typings/wetype'
import { getRandom } from '../lib/util'

export function ComponentDecor(
    componentsName: wxLib.ComponentName[]
) {
    return function (target): wxLib.Component {
        let name = target.prototype.constructor.name || `$id$${getRandom()}`
        let instance = new target
        let { methods, data } = instance
        let newData = {}
        let newMethods = {}
        Object.keys(data).forEach(key => {
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