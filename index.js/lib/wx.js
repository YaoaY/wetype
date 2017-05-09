"use strict";
exports.__esModule = true;
function promiseFactory(options, func) {
    return new Promise(function (resolve, reject) {
        options.success = resolve;
        options.fail = reject;
        func(options);
    });
}
exports.wt = {
    request: function (opts) { return promiseFactory(opts, wx.request); },
    chooseImage: function (opts) { return promiseFactory(opts, wx.chooseImage); },
    previewImage: function (opts) { return promiseFactory(opts, wx.previewImage); },
    getImageInfo: function (opts) { return promiseFactory(opts, wx.getImageInfo); },
    saveFile: function (opts) { return promiseFactory(opts, wx.saveFile); },
    getSavedFileList: function (opts) { return promiseFactory(opts, wx.getSavedFileList); },
    getSavedFileInfo: function (opts) { return promiseFactory(opts, wx.getSavedFileInfo); },
    removeSavedFile: function (opts) { return promiseFactory(opts, wx.removeSavedFile); },
    openDocument: function (opts) { return promiseFactory(opts, wx.openDocument); },
    setStorage: function (opts) { return promiseFactory(opts, wx.setStorage); },
    getStorage: function (opts) { return promiseFactory(opts, wx.getStorage); },
    getStorageInfo: function (opts) { return promiseFactory(opts, wx.getStorageInfo); },
    removeStorage: function (opts) { return promiseFactory(opts, wx.removeStorage); },
    clearStorage: wx.clearStorage,
    getLocation: function (opts) { return promiseFactory(opts, wx.getLocation); },
    chooseLocation: function (opts) { return promiseFactory(opts, wx.chooseLocation); },
    openLocation: function (opts) { return promiseFactory(opts, wx.openLocation); },
    createMapContext: wx.createMapContext,
    getSystemInfo: function (opts) { return promiseFactory(opts, wx.getSystemInfo); },
    // canIUse: 
    getNetworkType: function (opts) { return promiseFactory(opts, wx.getNetworkType); },
    // onNetWorkStatusChange: wx.onne
    makePhoneCall: function (opts) { return promiseFactory(opts, wx.makePhoneCall); },
    scanCode: function (opts) { return promiseFactory(opts, wx.scanCode); },
    setClipboardData: function (opts) { return promiseFactory(opts, wx.setClipboardData); },
    getClipboardData: function (opts) { return promiseFactory(opts, wx.getClipboardData); },
    showToast: function (opts) { return promiseFactory(opts, wx.showToast); },
    // showLoading: (opts: wx.showlo)
    hideToast: wx.hideToast,
    // wx.hideLoading: 
    showModal: function (opts) { return promiseFactory(opts, wx.showModal); },
    showActionSheet: function (opts) { return promiseFactory(opts, wx.showActionSheet); },
    setNavigationBarTitle: function (opts) { return promiseFactory(opts, wx.setNavigationBarTitle); },
    showNavigationBarLoading: wx.showNavigationBarLoading,
    hideNavigationBarLoading: wx.hideNavigationBarLoading,
    navigateTo: function (opts) { return promiseFactory(opts, wx.navigateTo); },
    redirectTo: function (opts) { return promiseFactory(opts, wx.redirectTo); },
    switchTab: function (opts) { return promiseFactory(opts, wx.switchTab); },
    navigateBack: function (opts) { return promiseFactory(opts, wx.navigateBack); },
    // reLaunch: (opts: wx.relo)
    stopPullDownRefresh: wx.stopPullDownRefresh,
    login: function (opts) { return promiseFactory(opts, wx.login); },
    checkSession: function (opts) { return promiseFactory(opts, wx.checkSession); },
    getUserInfo: function (opts) { return promiseFactory(opts, wx.getUserInfo); },
    requestPayment: function (opts) { return promiseFactory(opts, wx.requestPayment); }
};
