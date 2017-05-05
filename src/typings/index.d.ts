declare function App(arg: wxLib.AppMethods): void
declare const Page: (arg: wxLib.PageMethods) => void

declare module wxLib {
    const createAppConfig: (arg: AppConfig) => void
    const createPageConfig: (arg: PageConifg) => void
    function getApp(any): any
    const getCurrentPages: () => any[]
    interface Wx {

    }

    interface AppMethods {
        onLauch?: () => void,
        onShow?: () => void,
        onHide?: () => void,
        onError?: () => void,
        globalData?: any
    }

    interface AppClass {
        globalData;
        onLauch?();
        onShow?();
        onHide?();
        onError?();
    }

    interface PageMethods {
        data: any,
        onLoad?: () => void | Promise<any>,
        onReady?: () => void | Promise<any>,
        onShow?: () => void | Promise<any>,
        onHide?: () => void | Promise<any>,
        onUnload?: () => void | Promise<any>,
        onPullDownRefresh?: () => void | Promise<any>,
        onReachBottom?: () => void | Promise<any>,
        onShareAppMessae?: () => ShareAppMessage,
        methods: {
            [eventHandler: string]: any
        }
    }

    interface ShareAppMessage {
        title: string,
        path: string
    }

    interface AppConfig {
        pages: string[],
        window: {
            navigationBarTitleText: string,
            navigationBarBackgroundColor?: string,
            navigationBarTextStyle?: 'white' | 'black',
            backgroundColor?: string,
            backgroundTextStyle?: 'dark' | 'light',
            enablePullDownRefresh?: Boolean
        },
        tabBar: {
            color: string,
            selectedColor: string,
            backgroundColor: string,
            borderStyle?: 'black' | 'white',
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
        iconPath: string,
        selectedIconPath: string
    }

    interface PageConifg {
        navigationBarBackgroundColor?: string,
        navigationBarTextStyle?: 'black' | 'white',
        navigationBarTitleText?: string,
        backgroundColor?: string,
        backgroundTextStyle?: string,
        enablePullDownRefresh?: Boolean,
        disableScroll?: Boolean
    }
}

