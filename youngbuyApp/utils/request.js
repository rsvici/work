// 本服务用于封装请求
// 返回的是一个promisepromise
// get
var url = 'https://wechat.youngbuy.com';
var requestGet = function (newUrl, newData, token) {
    wx.showLoading({
        title: '加载中',
        mask: true
    });
    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: url + newUrl,
            data: newData,
            header: {
                'content-type': 'application/json', // 默认值
                token
            },
            success(e) {
                if (e.data.isSuccess) {
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
var requestPost = function (newUrl, newData, token, showlode) {
    if (!showlode) {
        wx.showLoading({
            title: '加载中',
            mask: true
        });
    }


    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: url + newUrl,
            data: newData,
            method: 'POST',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                token
            },
            success(e) {
                if (e.data.isSuccess) {
                    resolve(e)
                    wx.hideLoading();
                } else if (e.statusCode == "500") {
                    wx.showLoading({
                        title: '网络错误'
                    })
                    setTimeout(function () {
                        reject(e)
                        wx.hideLoading();
                    }, 1500)
                } else {
                    if (e.data.error_msg.msg) {
                        wx.showToast({
                            title: e.data.error_msg.msg,
                            icon: 'none'
                        })
                    } else {
                        wx.showToast({
                            title: e.data.error_msg,
                            icon: 'none'
                        })
                    }

                    setTimeout(function () {
                        reject(e)
                        wx.hideLoading();
                    }, 1500)
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