import { wetype } from '../../typings/wetype.new'

export class ComponentForExtend implements wetype.ComponentClass {
    
    $root: wetype.AppClass
    $parent: wetype.AppClass | wetype.PageClass | wetype.ComponentClass
    $com
    $data
    $name: string
    $wxAppContext: wetype.OriginalAppContext
    $wxPageContext: wetype.OriginalPageContext
    $isComponent: boolean = false

    // properties that is extended in specified component
    components: wetype.ObjectLiteral = {}
    data: wetype.ObjectLiteral = {}
    methods: wetype.MethodLiteral = {}

    init (wxPageCtx: wetype.OriginalPageContext, $root, $parent?) {
        this.$wxPageContext = wxPageCtx
    }

    onLoad () {
        
    }

}