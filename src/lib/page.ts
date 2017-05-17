import { ComponentForExtend } from './component'
import { wetype } from '../../typings/wetype.new'
import { globalContext } from './context'

export class PageForExtend extends ComponentForExtend {
    
    $isComponent = false

    init (wxPageCtx: wetype.OriginalPageContext, $parent: wetype.AppClass) {
        this.$parent = $parent
        this.$root = globalContext.$instance
        super.init(wxPageCtx, this)
    }

    onLoad () {
        super.onLoad()
    }

}