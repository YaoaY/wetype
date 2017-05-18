import { $Component } from "../index";
import { pageEvent } from '../lib/config'
import { wetype } from '../../typings/wetype.new'

export function getDataFromInstance(ins: $Component): wetype.ObjectLiteral {
    let data = {}
    Object.getOwnPropertyNames(ins).forEach(propName => {
        if (
            typeof ins[propName] !== 'function' &&
            pageEvent.indexOf(propName) === -1 &&
            !/\$_/.test(propName[0])
        ) {
            data[propName] = ins[propName]
        }
    })
    return data
}