function promiseFactory(options, func) {
    return new Promise((resolve, reject) => {
        options.success = resolve
        options.fail = reject
        func(options)
    })
}

export const wt = {

    request: (opts: wx.RequestOptions): Promise<wx.RequestResult> => promiseFactory(opts, wx.request),

    chooseImage: (opts: wx.ChooseImageOptions): Promise<wx.ChooseImageResult> => promiseFactory(opts, wx.chooseImage),

    previewImage: (opts: wx.PreviewImageOptions): Promise<any> => promiseFactory(opts, wx.previewImage),

    getImageInfo: (opts: wx.GetImageInfoOptions): Promise<wx.GetImageInfoResult> => promiseFactory(opts, wx.getImageInfo),

    saveFile: (opts: wx.SaveFileOptions): Promise<wx.SaveFileResult> => promiseFactory(opts, wx.saveFile),

    getSavedFileList: (opts: wx.GetSavedFileListOptions): Promise<wx.GetSavedFileListResult> => promiseFactory(opts, wx.getSavedFileList),

    getSavedFileInfo: (opts: wx.GetSavedFileInfoOptions): Promise<wx.GetSavedFileInfoResult> => promiseFactory(opts, wx.getSavedFileInfo),

    removeSavedFile: (opts: wx.RemoveSavedFileOptions): Promise<any> => promiseFactory(opts, wx.removeSavedFile),

    openDocument: (opts: wx.OpenDocumentOptions): Promise<any> => promiseFactory(opts, wx.openDocument),

    setStorage: (opts: wx.SetStorageOptions): Promise<any> => promiseFactory(opts, wx.setStorage),

    getStorage: (opts: wx.GetStorageOptions): Promise<wx.GetStorageResult> => promiseFactory(opts, wx.getStorage),

    getStorageInfo: (opts: wx.GetStorageInfoOptions): Promise<wx.GetStorageInfoResult> => promiseFactory(opts, wx.getStorageInfo),

    removeStorage: (opts: wx.RemoveStorageOptions): Promise<any> => promiseFactory(opts, wx.removeStorage),

    clearStorage: wx.clearStorage,

    getLocation: (opts: wx.GetLocationOptions): Promise<wx.GetLocationResult> => promiseFactory(opts, wx.getLocation),

    chooseLocation: (opts: wx.ChooseLocationOptions): Promise<wx.ChooseLocationResult> => promiseFactory(opts, wx.chooseLocation),

    openLocation: (opts: wx.OpenLocationOptions): Promise<any> => promiseFactory(opts, wx.openLocation),

    createMapContext: wx.createMapContext,

    getSystemInfo: (opts: wx.GetSystemInfoOptions): Promise<wx.GetSystemInfoResult> => promiseFactory(opts, wx.getSystemInfo),

    // canIUse: 

    getNetworkType: (opts: wx.GetNetworkTypeOptions): Promise<wx.GetNetworkTypeResult> => promiseFactory(opts, wx.getNetworkType),

    // onNetWorkStatusChange: wx.onne

    makePhoneCall: (opts: wx.MakePhoneCallOptions): Promise<any> => promiseFactory(opts, wx.makePhoneCall),

    scanCode: (opts: wx.ScanCodeOptions): Promise<wx.ScanCodeOptions> => promiseFactory(opts, wx.scanCode),

    setClipboardData: (opts: wx.SetClipboardDataOptions): Promise<any> => promiseFactory(opts, wx.setClipboardData),

    getClipboardData: (opts: wx.GetClipboardDataOptions): Promise<wx.GetClipboardDataResult> => promiseFactory(opts, wx.getClipboardData),

    showToast: (opts: wx.ShowToastOptions): Promise<any> => promiseFactory(opts, wx.showToast),

    // showLoading: (opts: wx.showlo)

    hideToast: wx.hideToast,

    // wx.hideLoading: 

    showModal: (opts: wx.ShowModalOptions): Promise<wx.ShowModalResult> => promiseFactory(opts, wx.showModal), 

    showActionSheet: (opts: wx.ShowActionSheetOptions): Promise<wx.ShowActionSheetResult> => promiseFactory(opts, wx.showActionSheet),

    setNavigationBarTitle: (opts: wx.SetNavigationBarTitleOptions): Promise<any> => promiseFactory(opts, wx.setNavigationBarTitle),

    showNavigationBarLoading: wx.showNavigationBarLoading,

    hideNavigationBarLoading: wx.hideNavigationBarLoading,

    navigateTo: (opts: wx.NavigateToOptions): Promise<any> => promiseFactory(opts, wx.navigateTo),

    redirectTo: (opts: wx.RedirectToOptions): Promise<any> => promiseFactory(opts, wx.redirectTo),

    switchTab: (opts: wx.SwitchTabOptions): Promise<any> => promiseFactory(opts, wx.switchTab),

    navigateBack: (opts: wx.NavigateBackOptions): Promise<any> => promiseFactory(opts, wx.navigateBack),

    // reLaunch: (opts: wx.relo)

    stopPullDownRefresh: wx.stopPullDownRefresh,

    login: (opts: wx.LoginOptions): Promise<wx.LoginResult> => promiseFactory(opts, wx.login),

    checkSession: (opts: wx.CheckSessionOptions): Promise<any> => promiseFactory(opts, wx.checkSession),

    getUserInfo: (opts: wx.GetUserInfoOptions): Promise<any> => promiseFactory(opts, wx.getUserInfo),

    requestPayment: (opts: wx.RequestPaymentOptions): Promise<any> => promiseFactory(opts, wx.requestPayment)

}