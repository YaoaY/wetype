export function getRandom () {
    return (new Date().getTime() + '').slice(-6)
}

export const assign = Object.assign

export const getKeys = Object.keys

export const inNode = typeof process !== 'undefined'