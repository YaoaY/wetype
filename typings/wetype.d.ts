export declare namespace wxLib {

    interface AppMethods {
        onLauch(): void,
        onShow(): void,
        onHide(): void,
        onError(): void,
        globalData?: any
    }

    interface AppClass {
        globalData;
        onLauch?();
        onShow?();
        onHide?();
        onError?();
    }

    interface PageEvents {
        onLoad?(this: any): void | Promise<any>,
        onReady?(this: any): void | Promise<any>,
        onShow?(this: any): void | Promise<any>,
        onHide?(this: any): void | Promise<any>,
        onUnload?(this: any): void | Promise<any>,
        onPullDownRefresh?(this: any): void | Promise<any>,
        onReachBottom?(this: any): void | Promise<any>,
        onShareAppMessae?(this: any): ShareAppMessage,
    }

    interface PageMethods extends PageEvents {
        methods?: {
            [eventHandler: string]: any
        }
    }

    interface ComponentMethods {
        onLoad?(): any,
        onReady?(): any,
        onShow?(): any,
        onHide?(): any,
        onUnload?(): any,
        onReachBottom?(): any,
        methods: {
            [eventHandler: string]: any
        }
    }

    interface ComponentParsed {
        data: any,
        onLoad?(): any,
        onReady?(): any,
        onShow?(): any,
        onHide?(): any,
        onUnload?(): any,
        onReachBottom?(): any,
        methods: {
            [eventHandler: string]: any
        }
    }

    interface ShareAppMessage {
        title: string,
        path: string
    }

    type BlackOrWhite = 'black' | 'white'

    interface AppConfig {
        pages: string[],
        window: {
            navigationBarTitleText: string,
            navigationBarBackgroundColor?: string,
            navigationBarTextStyle?: BlackOrWhite,
            backgroundColor?: string,
            backgroundTextStyle?: string,
            enablePullDownRefresh?: Boolean
        },
        tabBar: {
            color: string,
            selectedColor: string,
            backgroundColor: string,
            borderStyle?: BlackOrWhite,
            list: TabbarList[],
            position?: 'top' | 'bottom'
        },
        networkTimeout?: {
            request?: Number,
            connectSocket?: Number,
            uploadFile?: Number,
            downloadFile?: Number
        },
        debug?: Boolean
    }

    interface TabbarList {
        pagePath: string,
        text: string,
        iconPath?: string,
        selectedIconPath?: string
    }

    interface PageConifg {
        navigationBarBackgroundColor?: string,
        navigationBarTextStyle?: BlackOrWhite,
        navigationBarTitleText?: string,
        backgroundColor?: string,
        backgroundTextStyle?: string,
        enablePullDownRefresh?: Boolean,
        disableScroll?: Boolean
    }

    type ComponentName = string

    interface Component {
        // name: string,
        // instance: ComponentMethods

    }

    interface PageDecoConfig {
        pageConfig: wxLib.PageConifg,
        data?: any,
        components?: ComponentConstructor[]
    }

    interface PageConstructor {
        new (): PageMethods
        components?: string[]
        config?: any
    }

    interface ComponentConstructor {
        new (): ComponentMethods
        prototype: ComponentMethods
        // static data
        data?: any,
    }
}

