import { wxLib } from './wetype'

export declare namespace wetype {

    interface ObjectLiteral {
        [name: string]: ObjectLiteral | string | number | boolean | any[]
    }

    interface MethodLiteral {
        [name: string]: () => any
    }

    interface AppBaseEvents {
        onLaunch?: () => any
        onShow?: () => any
        onUnlaunch?: () => any
        onHide?: () => any
    }

    interface AppClass extends AppBaseEvents {

    }

    interface ComponentBaseEvents { 
        onLoad?: () => any
        onReady?: () => any
        onShow?: () => any
        onHide?: () => any
        onUnload?: () => any
        onShareAppMessage?: () => ShareAppMessageResult
        onPullDownRefresh?: () => any
        onReachBottom?: () => any
    }

    interface PageBaseEvents extends ComponentBaseEvents {
    }

    interface ComponentPrototype extends ComponentBaseEvents {

    }

    interface ComponentClass extends ComponentPrototype {
        data?: ObjectLiteral
        methods?: MethodLiteral
        events?: MethodLiteral
    }

    interface ComponentDecorConfig {
        data?: ObjectLiteral
        components?: any
    }

    interface PagePrototype extends ComponentPrototype {

    }

    interface PageClass extends ComponentClass {
    }

    interface ShareAppMessageResult {
        path: string
        title: string
    }

    interface PageDecorOptions extends ComponentDecorConfig {
        pageConfig?: wxLib.PageConifg
    }

    interface ComponentConstructor {
        new (): ComponentClass
        prototype: ComponentPrototype
        data?: ObjectLiteral
    }

    interface PageConstructor extends ComponentConstructor {
        new(): PageClass
        prototype: PagePrototype
    }


    interface ComponentContext {

    }

    interface PageContext extends ComponentContext {

    }

    interface GlobalContext extends AppBaseEvents {
        $pages: {
            [pageName: string]: PageContext
        }
    }

    interface ComponentContext {
        $com: {
            [ComponentName: string]: ComponentClass
        }
        $data: ObjectLiteral
        $isComponent: boolean
        $name: string
        $parent: AppClass | PageClass | ComponentClass
        $root: AppClass
        $wxAppContext: OriginalAppContext
        $wxPageContext: OriginalPageContext
        data: ObjectLiteral
    }

    interface PageContext extends ComponentContext {
        $status: string
    }

    interface OriginalAppContext extends AppBaseEvents {

    }

    interface OriginalPageContext extends PageBaseEvents {
        data?: ObjectLiteral
    }


}