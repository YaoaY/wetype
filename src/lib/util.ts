export function getRandom () {
    return (new Date().getTime() + '').slice(-6)
}

export const assign = Object.assign

export const getKeys = Object.keys

export const inNode = typeof process !== 'undefined'

export function extendClass (classA, classB) {
    let protoNames = Object.getOwnPropertyNames(classB.prototype).slice(1)
    let newProtos = protoNames.map(name => classB.prototype[name])
    assign(classA.prototype, newProtos)
    return classA
}

export const getProperties = Object.getOwnPropertyNames