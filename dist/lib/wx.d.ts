export declare const wt: {
    App: (app: IApp) => void;
    Page: (page: IPage) => void;
    getCurrentPages: () => IPage[];
    getApp: () => IApp;
    request: (opts: wx.RequestOptions) => Promise<wx.RequestResult>;
    chooseImage: (opts: wx.ChooseImageOptions) => Promise<wx.ChooseImageResult>;
    previewImage: (opts: wx.PreviewImageOptions) => Promise<any>;
    getImageInfo: (opts: wx.GetImageInfoOptions) => Promise<wx.GetImageInfoResult>;
    saveFile: (opts: wx.SaveFileOptions) => Promise<wx.SaveFileResult>;
    getSavedFileList: (opts: wx.GetSavedFileListOptions) => Promise<wx.GetSavedFileListResult>;
    getSavedFileInfo: (opts: wx.GetSavedFileInfoOptions) => Promise<wx.GetSavedFileInfoResult>;
    removeSavedFile: (opts: wx.RemoveSavedFileOptions) => Promise<any>;
    openDocument: (opts: wx.OpenDocumentOptions) => Promise<any>;
    setStorage: (opts: wx.SetStorageOptions) => Promise<any>;
    getStorage: (opts: wx.GetStorageOptions) => Promise<wx.GetStorageResult>;
    getStorageInfo: (opts: wx.GetStorageInfoOptions) => Promise<wx.GetStorageInfoResult>;
    removeStorage: (opts: wx.RemoveStorageOptions) => Promise<any>;
    clearStorage: () => void;
    getLocation: (opts: wx.GetLocationOptions) => Promise<wx.GetLocationResult>;
    chooseLocation: (opts: wx.ChooseLocationOptions) => Promise<wx.ChooseLocationResult>;
    openLocation: (opts: wx.OpenLocationOptions) => Promise<any>;
    createMapContext: (mapId: string) => wx.MapContext;
    getSystemInfo: (opts: wx.GetSystemInfoOptions) => Promise<wx.GetSystemInfoResult>;
    getNetworkType: (opts: wx.GetNetworkTypeOptions) => Promise<wx.GetNetworkTypeResult>;
    makePhoneCall: (opts: wx.MakePhoneCallOptions) => Promise<any>;
    scanCode: (opts: wx.ScanCodeOptions) => Promise<wx.ScanCodeOptions>;
    setClipboardData: (opts: wx.SetClipboardDataOptions) => Promise<any>;
    getClipboardData: (opts: wx.GetClipboardDataOptions) => Promise<wx.GetClipboardDataResult>;
    showToast: (opts: wx.ShowToastOptions) => Promise<any>;
    hideToast: () => void;
    showModal: (opts: wx.ShowModalOptions) => Promise<wx.ShowModalResult>;
    showActionSheet: (opts: wx.ShowActionSheetOptions) => Promise<wx.ShowActionSheetResult>;
    setNavigationBarTitle: (opts: wx.SetNavigationBarTitleOptions) => Promise<any>;
    showNavigationBarLoading: () => void;
    hideNavigationBarLoading: () => void;
    navigateTo: (opts: wx.NavigateToOptions) => Promise<any>;
    redirectTo: (opts: wx.RedirectToOptions) => Promise<any>;
    switchTab: (opts: wx.SwitchTabOptions) => Promise<any>;
    navigateBack: (opts: wx.NavigateBackOptions) => Promise<any>;
    stopPullDownRefresh: () => void;
    login: (opts: wx.LoginOptions) => Promise<wx.LoginResult>;
    checkSession: (opts: wx.CheckSessionOptions) => Promise<any>;
    getUserInfo: (opts: wx.GetUserInfoOptions) => Promise<any>;
    requestPayment: (opts: wx.RequestPaymentOptions) => Promise<any>;
};
