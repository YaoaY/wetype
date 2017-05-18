import { $Component } from "../index";
import { pageEvent } from '../lib/config'
import { wetype } from '../../typings/wetype.new'

export function getDataFromInstance(ins: $Component): wetype.ObjectLiteral {
    let data = {}
    Object.getOwnPropertyNames(ins).forEach(propName => {
        if (
            typeof ins[propName] !== 'function' &&
            pageEvent.indexOf(propName) === -1 &&
            !/\$|_/.test(propName[0]) &&
            propName !== 'methods'
        ) {
            data[propName] = ins[propName]
        }
    })
    return data
}

export function getMethodsFromInstance(ins: $Component) {
    let methods = {}
    Object.getOwnPropertyNames(ins.constructor.prototype).forEach(propName => {
        if (
            propName !== 'constructor' &&
            typeof ins[propName] === 'function' &&
            pageEvent.indexOf(propName) === -1 &&
            !/\$|_/.test(propName[0])
        ) {
            let prefix = ins.$prefix + propName

            methods[prefix] = function (e: wetype.OriginalEventObject, ...args) {
                ins[propName].call(ins, e.currentTarget.dataset, ...args)
            }
        }
    })
    return methods
}