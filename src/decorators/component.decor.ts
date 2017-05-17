import { wetype } from '../../typings/wetype.new'
import { inNode } from '../lib/util'
import { ComponentForExtendConstructor } from '../lib/component'

export interface ComponentDecorOptions {
    components?: ComponentForExtendConstructor[],
    data?: wetype.ObjectLiteral,
    props?: any
}

export function ComponentDecor(
    componentDecorOptions: ComponentDecorOptions
) {
    return function (Constr: ComponentForExtendConstructor): ComponentForExtendConstructor {
        if (inNode) {
            return Constr
        }
        Constr.components = componentDecorOptions.components
        Constr.data = componentDecorOptions.data
        // let proto = Constr.prototype
        // let instance = new Constr
        // let name = proto.constructor.name || `$id$${getRandom()}`

        return Constr
    }
}