"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    App,
    Page,
    getCurrentPages,
    getApp,
    request: (opts) => promiseFactory(opts, wx.request),
    chooseImage: (opts) => promiseFactory(opts, wx.chooseImage),
    previewImage: (opts) => promiseFactory(opts, wx.previewImage),
    getImageInfo: (opts) => promiseFactory(opts, wx.getImageInfo),
    saveFile: (opts) => promiseFactory(opts, wx.saveFile),
    getSavedFileList: (opts) => promiseFactory(opts, wx.getSavedFileList),
    getSavedFileInfo: (opts) => promiseFactory(opts, wx.getSavedFileInfo),
    removeSavedFile: (opts) => promiseFactory(opts, wx.removeSavedFile),
    openDocument: (opts) => promiseFactory(opts, wx.openDocument),
    setStorage: (opts) => promiseFactory(opts, wx.setStorage),
    getStorage: (opts) => promiseFactory(opts, wx.getStorage),
    getStorageInfo: (opts) => promiseFactory(opts, wx.getStorageInfo),
    removeStorage: (opts) => promiseFactory(opts, wx.removeStorage),
    clearStorage: wx.clearStorage,
    getLocation: (opts) => promiseFactory(opts, wx.getLocation),
    chooseLocation: (opts) => promiseFactory(opts, wx.chooseLocation),
    openLocation: (opts) => promiseFactory(opts, wx.openLocation),
    createMapContext: wx.createMapContext,
    getSystemInfo: (opts) => promiseFactory(opts, wx.getSystemInfo),
    // canIUse: 
    getNetworkType: (opts) => promiseFactory(opts, wx.getNetworkType),
    // onNetWorkStatusChange: wx.onne
    makePhoneCall: (opts) => promiseFactory(opts, wx.makePhoneCall),
    scanCode: (opts) => promiseFactory(opts, wx.scanCode),
    setClipboardData: (opts) => promiseFactory(opts, wx.setClipboardData),
    getClipboardData: (opts) => promiseFactory(opts, wx.getClipboardData),
    showToast: (opts) => promiseFactory(opts, wx.showToast),
    // showLoading: (opts: wx.showlo)
    hideToast: wx.hideToast,
    // wx.hideLoading: 
    showModal: (opts) => promiseFactory(opts, wx.showModal),
    showActionSheet: (opts) => promiseFactory(opts, wx.showActionSheet),
    setNavigationBarTitle: (opts) => promiseFactory(opts, wx.setNavigationBarTitle),
    showNavigationBarLoading: wx.showNavigationBarLoading,
    hideNavigationBarLoading: wx.hideNavigationBarLoading,
    navigateTo: (opts) => promiseFactory(opts, wx.navigateTo),
    redirectTo: (opts) => promiseFactory(opts, wx.redirectTo),
    switchTab: (opts) => promiseFactory(opts, wx.switchTab),
    navigateBack: (opts) => promiseFactory(opts, wx.navigateBack),
    // reLaunch: (opts: wx.relo)
    stopPullDownRefresh: wx.stopPullDownRefresh,
    login: (opts) => promiseFactory(opts, wx.login),
    checkSession: (opts) => promiseFactory(opts, wx.checkSession),
    getUserInfo: (opts) => promiseFactory(opts, wx.getUserInfo),
    requestPayment: (opts) => promiseFactory(opts, wx.requestPayment)
};
//# sourceMappingURL=wx.js.map