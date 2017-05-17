import { ComponentForExtend } from './component'
import { wetype } from '../../typings/wetype.new'
import { globalContext } from './context'

export class PageForExtend extends ComponentForExtend {
    
    $isComponent = false

    init (wxPageCtx: wetype.OriginalPageContext, $parent: wetype.AppClass) {
        this.$parent = $parent
        this.$root = globalContext.$instance
        super.init(wxPageCtx, this)

        let data = wxPageCtx.data
        let properties = {}
        Object.keys(data).forEach(k => {
            properties[k] = {
                get: () => wxPageCtx.data![k],
                set: (v) => wxPageCtx.setData({ [k]: v })
            }
        })
        Object.defineProperties(this, properties)
    }

    onLoad () {
        super.onLoad()
    }

}