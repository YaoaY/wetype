import { wxLib } from '../../typings/wetype'
import { getRandom, inNode } from '../lib/util'

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
        
        return Constr
    }
}