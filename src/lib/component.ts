import { wetype } from '../../typings/wetype.new'
import { AppForExtend } from './app'
import { PageForExtend } from './page'

export interface ComponentForExtendConstructor {
    new (): ComponentForExtend
    components?: ComponentForExtendConstructor[]
    prototype: any
    data?: wetype.ObjectLiteral
}

export class ComponentForExtend {
    $root: AppForExtend
    $parent: AppForExtend | PageForExtend | ComponentForExtend
    $components: {
        [name: string]: ComponentForExtend
    } = {}
    $data: wetype.ObjectLiteral = {}
    $name: string
    $wxAppContext: wetype.OriginalAppContext
    $wxPageContext: wetype.OriginalPageContext
    $isComponent: boolean = true
    $prefix: string = ''
    $wxapp

    // properties that is extended in specified component
    // components: wetype.ObjectLiteral = {}
    methods: any = {}

    init(wxPageCtx: wetype.OriginalPageContext, $root, $parent?) {
        this.$wxPageContext = wxPageCtx
        if (this.$isComponent) {
            this.$root = $root || this.$root
            this.$parent = $parent || this.$root
        }

        Object.keys(this.$data).forEach(k => {
            let prefix = `${this.$prefix}${k}`
            wxPageCtx.data = wxPageCtx.data || {}
            wxPageCtx.data[prefix] = this.$data[k]
            Object.defineProperty(this, k, {
                set: (v) => wxPageCtx.setData({ [prefix]: v }),
                get: () => wxPageCtx.data![prefix]
            })
        })

        Object.getOwnPropertyNames(this.$components).forEach(comIns => {
            let ins = this.$components[comIns]
            ins.init(wxPageCtx, $root, this)
            ins.onLoad && ins.onLoad.call(ins)
        })
    }

    onLoad() {

    }

}