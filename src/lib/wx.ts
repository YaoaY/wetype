function promiseFactory (func) {
    return new Promise((resolve, reject) => {
        func(resolve, reject)
    })
}

export function weRequest (options: RequestOpt): Promise<any> {
    return promiseFactory((resolve, reject) => {
        options.success = resolve
        options.fail = reject
        wx.request(options)
    })
}