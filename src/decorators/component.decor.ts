export function ComponentDecor() {
    return function (target) {
        let { name } = target.prototype.constructor
        let instance = new target
        let { methods, data } = instance
        let keys = Object.keys(data)
        let newData = {}
        keys.forEach(key => {
            newData[`$${name}$${key}`] = data[key]
        })
        Object.assign(instance, methods)
        delete instance.methods
        return {
            data: newData,
            instance
        }
    }
}