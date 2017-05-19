import { wetype } from '../../typings/wetype.new'
import { inNode } from '../lib/util'
import { $ComponentConstructor } from '../lib/component'

export interface ComponentDecorOptions {
    templateUrl?: string
    template?: string
    components?: $ComponentConstructor[]
    data?: wetype.ObjectLiteral
    props?: any
}

export function ComponentDecor(
    componentDecorOptions: ComponentDecorOptions
) {
    return function (Constr) {
        if (inNode) {
            Constr.templateUrl = componentDecorOptions.templateUrl
            Constr.template = componentDecorOptions.template
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