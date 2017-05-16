import { Component } from './component'
import { wetype } from '../../typings/wetype.new'

export class Page extends Component {
    
    isComponent = false

    init (wxPageCtx: wetype.OriginalPageContext, $parent: wetype.AppClass) {
        this.$parent = $parent
        this.$root = this
        super.init(wxPageCtx, this)
    }

    onLoad () {
        super.onLoad()
    }

    onShow() {

    }

}