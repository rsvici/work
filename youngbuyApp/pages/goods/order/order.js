//my.js
var request = require('../../../utils/request.js'); //require请求
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    typelist: ['WAITPAY', 'WAITSEND', 'WAITRECEIVE'],
    orderList: [],
    commentList: [],

  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.currentTarget.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      });
    }
    if (cur == 3) {
      this.getCommentList();
    } else {
      this.postOrderList();
    }
  },

  // 订单详情
  goPayDetail(e) {
    var id = e.currentTarget.dataset.orderid;
    var that = this;
    wx.navigateTo({
      url: `/pages/goods/paydetail/paydetail?id=${id}`,
    })
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
            wx.showToast({
              title: '取消成功',
              icon: 'success',
              duration: 1000,
              success: (result) => {
                setTimeout(function () {
                  that.postOrderList();
                }, 1000)
              },
              fail: () => {},
              complete: () => {}
            });
          })
        }
      },
      fail: () => {},
      complete: () => {}
    });
  },
  // 确定收货
  orderConfirm(e) {
    var that = this
    var order_id = e.currentTarget.dataset.orderid;
    var postUrl = `/api/order/orderConfirm`,
      postData = {
        order_id
      },
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      wx.showToast({
        title: '确定发货成功',
        icon: 'success',
        duration: 1000,
        success: (result) => {
          setTimeout(function () {
            that.setData({
              currentTab: 3
            })
            that.postOrderList();
          }, 1000)
        },
        fail: () => {},
        complete: () => {}
      });
    })
  },
  // 提醒发货
  remindSend() {
    wx.showToast({
      title: '提醒发货成功',
      icon: 'success',
      duration: 1000,
      success: (result) => {

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
          wx.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 1000,
            success: (result) => {
              that.setData({
                currentTab: 1
              })
              that.postOrderList();
            },
            fail: () => {},
            complete: () => {}
          });
        },
        fail(res) {
          wx.showToast({
            title: '支付失败',
            icon: 'none',
            duration: 1000,
          });
        }
      })
    }, function (error) {
      console.log(error);
    });
  },
  //获取订单列表
  postOrderList() {
    var currentTab = this.data.currentTab;
    var typelist = this.data.typelist;
    var type = typelist[currentTab];
    var that = this,
      postUrl = `/api/order/order_list`,
      postData = {
        type
      },
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      var orderList = response.data.result.order_list;
      that.setData({
        orderList
      })
      console.log(orderList);

    }, function (error) {
      console.log(error);
    });
  },
  //获取订单列表
  getCommentList() {
    var that = this,
      getUrl = `/api/order/comment`,
      getData = {
        p: 1,
        status: 0,
      },
      token = app.globalData.tokenInfo.result.token;
    request.requestGet(getUrl, getData, token).then(function (response) {
   
      var commentList = response.data.result.comment_list;
      that.setData({
        commentList
      })

    }, function (error) {
      console.log(error);
    });
  },

  onLoad: function (option) {
    var that = this;
    if (option.orderId) {
      this.setData({
        currentTab: option.orderId
      })
    } else {
      this.setData({
        currentTab: 0
      })
    }
    if (this.data.currentTab == 3) {
      that.getCommentList();
    } else {
      that.postOrderList()
    }

  },

  // onPullDownRefresh() {
  //   this.setData({
  //     PageIndex: 1,
  //     goodsList: [],
  //   })
  //   this.postOrderList();
  //   setTimeout(function () {
  //     wx.stopPullDownRefresh();
  //   }, 500)
  // },
  // onReachBottom() {
  //   var PageIndex = this.data.PageIndex;
  //   PageIndex += 1
  //   this.setData({
  //     PageIndex
  //   })
  //   this.postOrderList();
  // }
})