import { wxLib } from './wetype'


export declare namespace wetype {

    interface ObjectLiteral {
        [name: string]: ObjectLiteral | string | number | boolean | any[]
    }

    interface MethodLiteral {
        [name: string]: Function
    }

    interface AppBaseEvents {
        onLaunch?: () => any
        onShow?: () => any
        onUnlaunch?: () => any
        onHide?: () => any
    }

    // interface PagesProperty {
    //     [page: string]: PageClass
    // }

    // interface AppClass extends AppBaseEvents {
    //     $wxapp: OriginalAppContext
    //     $pages: PagesProperty
    //     init(gc: GlobalContext): void
    // }

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

    // interface ComponentPrototype extends ComponentBaseEvents {
    //     init(
    //         wxPageContext: OriginalPageContext,
    //         $root: AppClass,
    //         $parent?: AppClass | PageClass | ComponentClass
    //     ): void
    // }

    // interface ComponentClass extends ComponentPrototype {
    //     data?: ObjectLiteral
    //     methods?: MethodLiteral
    //     events?: MethodLiteral
    //     $root: AppClass
    //     $parent: AppClass | PageClass | ComponentClass
    //     $com: {
    //         [componentName: string]: ComponentClass
    //     }
    //     $data: ObjectLiteral
    //     $name: string
    //     $wxAppContext: OriginalAppContext
    //     $wxPageContext: OriginalPageContext
    //     $isComponent: boolean
    // }

    interface ComponentDecorConfig {
        data?: ObjectLiteral
        components?: any
    }

    // interface PagePrototype extends ComponentPrototype {

    // }

    // interface PageClass extends ComponentClass {
    // }

    interface ShareAppMessageResult {
        path: string
        title: string
    }

    interface PageDecorOptions extends ComponentDecorConfig {
        pageConfig?: wxLib.PageConifg
    }

    // interface ComponentConstructor {
    //     new (): ComponentClass
    //     prototype: ComponentPrototype
    //     data?: ObjectLiteral
    //     components?: ComponentConstructor[]
    // }

    // interface PageConstructor extends ComponentConstructor {
    //     new(): PageClass
    //     prototype: PagePrototype
    //     config?: any
    //     // data?: ObjectLiteral
    //     // components?: any
    // }

    // interface AppConstructor {
    //     new (): AppClass
    //     prototype: any
    // }


    interface ComponentContext {

    }

    interface PageContext extends ComponentContext {

    }

    // interface GlobalContext extends AppBaseEvents {
    //     $pages: PagesProperty
    //     $instance: AppClass
    // }

    // interface ComponentContext {
    //     $com: {
    //         [ComponentName: string]: ComponentClass
    //     }
    //     $data: ObjectLiteral
    //     $isComponent: boolean
    //     $name: string
    //     $parent: AppClass | PageClass | ComponentClass
    //     $root: AppClass
    //     $wxAppContext: OriginalAppContext
    //     $wxPageContext: OriginalPageContext
    //     data: ObjectLiteral
    // }

    // interface OriginalPageConfig extends PageBaseEvents {
    //     data?: ObjectLiteral
    //     $page: PageClass
    //     // custom event handlers
    //     [handlers: string]: any
    // }

    // interface OriginalAppConfig extends AppBaseEvents {
    //     $app: AppClass
    // }

    interface PageContext extends ComponentContext {
        $status: string
    }

    interface OriginalAppContext extends AppBaseEvents {
    }

    interface OriginalPageContext extends PageBaseEvents {
        data?: ObjectLiteral,
        setData(obj: ObjectLiteral): void
        update(): void
        forceUpdate(): void
    }

    type BlackOrWhite = 'black' | 'white'

    interface PageConifg {
        navigationBarBackgroundColor?: string,
        navigationBarTextStyle?: BlackOrWhite,
        navigationBarTitleText?: string,
        backgroundColor?: string,
        backgroundTextStyle?: string,
        enablePullDownRefresh?: Boolean,
        disableScroll?: Boolean
    }

    interface Touch {
        identifier: number
        pageX: number
        pageY: number
        clientX: number
        clientY: number
    }

    interface OriginalEventObject {
        type: string
        timestamp: number
        target: {
            id: string
            dataset: ObjectLiteral
        }
        currentTarget: {
            id: string
            dataset: ObjectLiteral
        }
        detail: {
            x: number
            y: number
        }
        touches: Touch[]
        changedTouches: Touch[]
    }

}