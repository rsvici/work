//addresslist.js
var request = require('../../../utils/request.js'); //require请求
//获取应用实例
const app = getApp()

Page({
  data: {
    addressList: [], //身份信息列表
  },
  postAddressList() {
    var that = this,
      postUrl = `/api/user/user_identity_list`,
      postData = {},
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data.result)
      that.setData({
        addressList: response.data.result
      })
    }, function (error) {
      console.log(error);
    });
  },
  addressAdd() {
    wx.navigateTo({
      url: '/pages/my/identity/identity',
    })
  },
  setDefaultAddress(e) {
    var form = e.currentTarget.dataset.item;
    form.is_default = 1;
    var that = this,
      postUrl = `/api/user/save_user_identity`,
      postData = form,
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      wx.showToast({
        title: '设置默认地址成功',
        icon: 'none',
        duration: 1500,
        complete: function () {
          that.postAddressList();
        }
      })
    }, function (error) {
      console.log(error);
    });
  },
  deleteAddress(e) {
    var form = e.currentTarget.dataset.item;
    form.is_delete = 1;
    var that = this,
      postUrl = `/api/user/save_user_identity`,
      postData = form,
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      wx.showToast({
        title: '删除成功',
        icon: 'none',
        duration: 1000,
        complete: function () {
          that.postAddressList();
        }
      })
    }, function (error) {
      console.log(error);
    });
  },
  updateAddress(e) {

    var identity_id = e.currentTarget.dataset.addressid;
    wx.navigateTo({
      url: `/pages/my/identity/identity?identity_id=${identity_id}`,

    })

  },
  checkIdentity(e) { //选择某一地址
    var item = e.currentTarget.dataset.item;
    app.globalData.checkIdentity = item;
    wx.navigateBack({
      delta: 1
    })
  },
  onShow: function () {
    var that = this;
    that.postAddressList();

  },

})