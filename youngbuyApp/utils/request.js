// 本服务用于封装请求
// 返回的是一个promisepromise
// get
var url = '';
var requestGet = function (newUrl, newData) {
    wx.showLoading({
        title: '加载中',
        mask: true
    });
    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: url + newUrl,
            data: newData,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(e) {
                if (e.data.retcode == 0) {
                    resolve(e)
                    wx.hideLoading();
                } else {
                    wx.showToast({
                        title: e.data.message,
                        icon: 'none'
                    })
                    reject(e)
                }
            },
            fail(e) {
                wx.showLoading({
                    title: '网络错误'
                })
            }
        });
    });
    return promise;
};

// post
var requestPost = function (newUrl, newData) {
    wx.showLoading({
        title: '提交中',
        mask: true
    });
    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: url + newUrl,
            data: newData,
            method: 'POST',
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success(e) {
                if (e.data.retcode == 0) {
                    resolve(e)
                    wx.hideLoading();
                } else {
                    wx.showToast({
                        title: e.data.message,
                        icon: 'none'
                    })
                    reject(e)
                }
            },
            fail(e) {
                wx.showLoading({
                    title: '网络错误'
                })
            }
        });
    });
    return promise;
};


export {
    requestGet,
    requestPost,
};