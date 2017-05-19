import { $Component } from './component'
import { wetype } from '../../typings/wetype.new'
import { globalContext } from './context'
import { $ComponentConstructor } from './component'
import { $App } from './app'

export interface $PageConstructor {
    new (): $Page
    components?: $ComponentConstructor[]
    config?: any
    template?: string
    templateUrl?: string
}

export class $Page extends $Component {
    
    $isComponent = false

    init (wxPageCtx: wetype.OriginalPageContext, $parent: $App) {
        this.$parent = $parent
        this.$root = globalContext.$instance
        super.init(wxPageCtx, this)
    }

    onLoad () {
        super.onLoad()
    }

    onShow () {
    }

    onHide () {

    }

}