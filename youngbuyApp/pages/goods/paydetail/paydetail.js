//pay.js
//获取应用实例
const app = getApp()
var request = require('../../../utils/request.js'); //require请求
Page({
  data: {
   orderInfo:{}, //订单信息
  },
  //获取订单详情信息
  postOrderDetail(id, token) {
    var that = this,
      postUrl = `/api/order/order_detail`,
      postData = {
        id
      };
    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data)
      that.setData({
        orderInfo: response.data.result.order
      })
      console.log(response.data.result.order);
    }, function (error) {
      console.log(error);
    });
  },
   // 取消订单
   cancelOrder(e) {
    var that = this
    wx.showModal({
      title: '取消订单',
      content: '确认取消此订单吗？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: 'red',
      success: (result) => {
        if (result.confirm) {
          var id = e.currentTarget.dataset.orderid;
          var postUrl = `/api/order/cancel_order`,
            postData = {
              id
            },
            token = app.globalData.tokenInfo.result.token;
          request.requestPost(postUrl, postData, token).then(function (response) {
            wx.reLaunch({
              url: '/pages/goods/order/order?orderId=0'
            })
          })
        }
      },
      fail: () => {},
      complete: () => {}
    });
  },
  // 支付
  getPayCode(e) {
    var order_id = e.currentTarget.dataset.orderid;
    var that = this,
      postUrl = `/api/payment/getCode`,
      postData = {
        pay_radio: 'pay_code=weixin',
        order_id
      },
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data.result);
      var getResnArray = response.data.result;
      wx.requestPayment({
        timeStamp: getResnArray.timeStamp,
        nonceStr: getResnArray.nonceStr,
        package: getResnArray.package,
        signType: getResnArray.signType,
        paySign: getResnArray.paySign,
        success(res) {
          wx.reLaunch({
            url: '/pages/goods/order/order?orderId=1'
          })
        },
        fail(res) {
          console.log(res)
        }
      })
    }, function (error) {
      console.log(error);
    });
  },
  onLoad: function (option) {
    var that = this;
    if (option.id) {
      that.postOrderDetail(option.id, app.globalData.tokenInfo.result.token)
      
    } else {
      that.postOrderDetail(96, app.globalData.tokenInfo.result.token)
    }
  },


})