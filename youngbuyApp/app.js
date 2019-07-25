var request = require('/utils/request.js'); //require请求
//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
        // return;
        var that = this,
          postUrl = `/api/user/mp_check_login`,
          postData = {
            code: res.code
          },
          token = '';
        request.requestPost(postUrl, postData, token).then(function (response) {

          if (that.tokenReadyCallback) {
            that.tokenReadyCallback(response)
          }
          that.globalData.tokenInfo = response.data;
        }, function (error) {
          console.log(error);
        });
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  globalData: {
    userInfo: null,
    tokenInfo: null,
    url: {
      upload: 'https://wechat.youngbuy.com',
    },
  },
  isRegister(url) {
    if (this.globalData.tokenInfo.result.is_register) {
      if (url) {
        wx.navigateTo({
          url,
        })
      }
    } else {
      wx.showToast({
        title: '请登录',
        icon: "loading",
        mask: true,
        duration: 500,
        success() {
          setTimeout(function () {
            wx.navigateTo({
              url: '/pages/my/login/login',
            })
          }, 500)
        }
      });
    }
  },
})