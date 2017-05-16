import { Component } from './component'

export class Page extends Component {
    
    protected isComponent = false

    protected $parent
    protected $root

    protected init (wx, $parent) {
        this.$parent = $parent
        this.$root = this
        super.init(wx, this)
    }

    onLoad () {
        super.onLoad()
    }

}