"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wx_1 = require("../../typings/wx");
function promiseFactory(options, func) {
    return new Promise((resolve, reject) => {
        options.success = resolve;
        options.fail = reject;
        func(options);
    });
}
const globalAny = global;
globalAny && (globalAny.wx = {});
exports.wt = {
    App: (opts) => wx_1.App,
    Page: (opts) => wx_1.Page,
    getCurrentPages: wx_1.getCurrentPages,
    getApp: wx_1.getApp,
    request: (opts) => promiseFactory(opts, wx_1.wx.request),
    chooseImage: (opts) => promiseFactory(opts, wx_1.wx.chooseImage),
    previewImage: (opts) => promiseFactory(opts, wx_1.wx.previewImage),
    getImageInfo: (opts) => promiseFactory(opts, wx_1.wx.getImageInfo),
    saveFile: (opts) => promiseFactory(opts, wx_1.wx.saveFile),
    getSavedFileList: (opts) => promiseFactory(opts, wx_1.wx.getSavedFileList),
    getSavedFileInfo: (opts) => promiseFactory(opts, wx_1.wx.getSavedFileInfo),
    removeSavedFile: (opts) => promiseFactory(opts, wx_1.wx.removeSavedFile),
    openDocument: (opts) => promiseFactory(opts, wx_1.wx.openDocument),
    setStorage: (opts) => promiseFactory(opts, wx_1.wx.setStorage),
    getStorage: (opts) => promiseFactory(opts, wx_1.wx.getStorage),
    getStorageInfo: (opts) => promiseFactory(opts, wx_1.wx.getStorageInfo),
    removeStorage: (opts) => promiseFactory(opts, wx_1.wx.removeStorage),
    clearStorage: wx_1.wx.clearStorage,
    getLocation: (opts) => promiseFactory(opts, wx_1.wx.getLocation),
    chooseLocation: (opts) => promiseFactory(opts, wx_1.wx.chooseLocation),
    openLocation: (opts) => promiseFactory(opts, wx_1.wx.openLocation),
    createMapContext: wx_1.wx.createMapContext,
    getSystemInfo: (opts) => promiseFactory(opts, wx_1.wx.getSystemInfo),
    // canIUse: 
    getNetworkType: (opts) => promiseFactory(opts, wx_1.wx.getNetworkType),
    // onNetWorkStatusChange: wx.onne
    makePhoneCall: (opts) => promiseFactory(opts, wx_1.wx.makePhoneCall),
    scanCode: (opts) => promiseFactory(opts, wx_1.wx.scanCode),
    setClipboardData: (opts) => promiseFactory(opts, wx_1.wx.setClipboardData),
    getClipboardData: (opts) => promiseFactory(opts, wx_1.wx.getClipboardData),
    showToast: (opts) => promiseFactory(opts, wx_1.wx.showToast),
    // showLoading: (opts: wx.showlo)
    hideToast: wx_1.wx.hideToast,
    // wx.hideLoading: 
    showModal: (opts) => promiseFactory(opts, wx_1.wx.showModal),
    showActionSheet: (opts) => promiseFactory(opts, wx_1.wx.showActionSheet),
    setNavigationBarTitle: (opts) => promiseFactory(opts, wx_1.wx.setNavigationBarTitle),
    showNavigationBarLoading: wx_1.wx.showNavigationBarLoading,
    hideNavigationBarLoading: wx_1.wx.hideNavigationBarLoading,
    navigateTo: (opts) => promiseFactory(opts, wx_1.wx.navigateTo),
    redirectTo: (opts) => promiseFactory(opts, wx_1.wx.redirectTo),
    switchTab: (opts) => promiseFactory(opts, wx_1.wx.switchTab),
    navigateBack: (opts) => promiseFactory(opts, wx_1.wx.navigateBack),
    // reLaunch: (opts: wx.relo)
    stopPullDownRefresh: wx_1.wx.stopPullDownRefresh,
    login: (opts) => promiseFactory(opts, wx_1.wx.login),
    checkSession: (opts) => promiseFactory(opts, wx_1.wx.checkSession),
    getUserInfo: (opts) => promiseFactory(opts, wx_1.wx.getUserInfo),
    requestPayment: (opts) => promiseFactory(opts, wx_1.wx.requestPayment)
};
//# sourceMappingURL=wx.js.map