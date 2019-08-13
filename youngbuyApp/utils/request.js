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
                    if (e.data.error_code == "403") {
                        // 登录
                        login();
                    }

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
                setTimeout(function () {
                    wx.hideLoading();
                }, 1500)
            }
        });
    });
    return promise;
};

const login = function () {
    wx.login({
        success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            // return;
            var that = this,
                postUrl = `/api/user/mp_check_login`,
                postData = {
                    code: res.code
                },
                token = '';
            requestPost(postUrl, postData, token).then(function (response) {
                const app = getApp()
                app.globalData.tokenInfo = response.data;
            }, function (error) {
                console.log(error);
            });
        }
    });
}

export {
    requestGet,
    requestPost,
};