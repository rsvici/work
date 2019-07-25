//login.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  getPhoneNumber(e) {  //微信获取手机号
    if (e.detail.iv) {
      console.log(e.detail.errMsg)
      console.log(e.detail.iv)
      console.log(e.detail.encryptedData)
    } else {
      this.bindPhone();
    }
  },
  bindPhone() {  //手机号登录
    wx.navigateTo({
      url: '/pages/my/bindphone/bindphone'
    })
  },
  onLoad: function () {

  },

})