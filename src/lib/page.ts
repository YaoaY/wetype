import { ComponentForExtend } from './component'
import { wetype } from '../../typings/wetype.new'
import { globalContext } from './context'
import { ComponentForExtendConstructor } from './component'
import { AppForExtend } from './app'

export interface PageForExtendConstructor {
    new (): PageForExtend
    components?: ComponentForExtendConstructor[]
    config?: any
}

export class PageForExtend extends ComponentForExtend {
    
    $isComponent = false

    init (wxPageCtx: wetype.OriginalPageContext, $parent: AppForExtend) {
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