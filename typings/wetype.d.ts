export declare namespace wxLib {

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
        methods?: {
            [eventHandler: string]: any
        }
    }

    interface ComponentMethods {
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
        name: string,
        data: any,
        instance: ComponentMethods
    }

    interface PageDecoConfig {
        pageConfig: wxLib.PageConifg,
        components?: Component[]
    }

    interface PageConstructor {
        new (): PageMethods
    }

    interface TapEvent {
        type: 'tap',
        timestamp: number,
        target: {
            id: string,
            dataset: {
                [datasetname: string]: string
            }
        },
        currentTarget: {
            id: string,
            dataset: {
                [datasetname: string]: string
            }
        },
        detail: {
            x: number,
            y: number
        },
        touches: {
            identifier: number,
            pageX: number,
            pageY: number,
            clientX: number,
            clientY: number
        }[],
        changedTouches: {
            identifier: number,
            pageX: number,
            pageY: number,
            clientX: number,
            clientY: number
        }[]
    }
}

