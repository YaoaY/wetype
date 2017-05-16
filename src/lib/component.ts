export class Component {
    
    protected isComponent: Boolean = false
    protected components: any = {}
    protected data: any = {}
    protected methods: any = {}

    protected $wxPage: any = {}

    protected init ($wxPage, $root, $parent?) {
        this.$wxPage = $wxPage
    }

    protected onLoad () {
        
    }

}