import { wetype } from '../../typings/wetype.new'
import { $App } from './app'
import { $Page } from './page'

export interface $ComponentConstructor {
    new (): $Component
    components?: $ComponentConstructor[]
    prototype: any
    data?: wetype.ObjectLiteral
}

export class $Component {
    $root: $App
    $parent: $App | $Page | $Component
    $components: {
        [name: string]: $Component
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