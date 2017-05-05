export declare const App: (arg: AppMethods) => void
export declare const Page: (arg: PageMethods) => void
export declare const createAppConfig: (arg: AppConfig) => void
export declare const createPageConfig: (arg: PageConifg) => void
export declare const getApp: () => any
export declare const getCurrentPages: () => any[]

export interface Wx {

}

export interface AppMethods {
    onLauch?: () => void,
    onShow?: () => void,
    onHide?: () => void,
    onError?: () => void,
    globalData?: any
}

export interface AppClass {
    globalData;
    onLauch?();
    onShow?();
    onHide?();
    onError?();
}

export interface PageMethods {
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

export interface ShareAppMessage {
    title: string,
    path: string
}

export interface AppConfig {
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

export interface TabbarList {
    pagePath: string,
    text: string,
    iconPath: string,
    selectedIconPath: string
}

export interface PageConifg {
    navigationBarBackgroundColor?: string,
    navigationBarTextStyle?: 'black' | 'white',
    navigationBarTitleText?: string,
    backgroundColor?: string,
    backgroundTextStyle?: string,
    enablePullDownRefresh?: Boolean,
    disableScroll?: Boolean
}