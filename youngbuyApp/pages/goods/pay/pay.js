//pay.js
//获取应用实例
const app = getApp()
var request = require('../../../utils/request.js'); //require请求
var tips = require('../../../utils/tip.js'); //

Page({
  data: {
    payInfo: {}, //支付信息
    addressInfo: {}, //默认地址信息
    identityInfo: {}, //默认身份信息
    countPrice: {}, //价格体系
    form: {
      action: '',
      address_id: '',
      prom_type: '0',
      goods_num: '',
      goods_id: '',
      act: 'submit_order'
    }
  },
  navigateToNewApp(event) {
    var url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: url // 页面 
    })
  },
  // 获取购物车支付信息
  AsyncUpdateCart(cart, token) {
    var that = this,
      postUrl = `	/api/goods/AsyncUpdateCart`,
      postData = {
        cart
      };
    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data)
      that.setData({
        payInfo: response.data.result
      })
    }, function (error) {
      console.log(error);
    });

  },
  //获取支付信息
  postCart2(action, goods_id, goods_num, token) {
    var that = this,
      postUrl = `/api/goods/cart2`,
      postData = {
        action,
        goods_id,
        goods_num
      };
    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data)
      that.setData({
        payInfo: response.data.result
      })
    }, function (error) {
      console.log(error);
    });
  },

  //获取地址信息
  postAddressList() {
    var form = this.data.form;
    var that = this,
      postUrl = `/api/user/address_list`,
      postData = {},
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      var addressList = response.data.result;
      var addressInfo = {};
      addressList.forEach(function (value, key) {
        if (value.is_default == 1) {
          addressInfo = value;
          form.address_id = value.address_id;
        }
      })
      that.setData({
        addressInfo,
        form
      })
      that.countPrice();
    }, function (error) {
      console.log(error);
    });
  },
  // 获取身份信息
  postIdentity() {
    var form = this.data.form;
    var that = this,
      postUrl = `/api/user/user_identity_list`,
      postData = {},
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      form.user_id_name = response.data.result[0].real_name;
      form.user_id_card = response.data.result[0].id_card;
      that.setData({
        identityInfo: response.data.result[0],
        form
      })
    }, function (error) {
      console.log(error);
    });
  },
  //计算价格
  countPrice() {
    var form = this.data.form;
    form.act = '';
    var that = this,
      postUrl = `/api/goods/cart3`,
      postData = form,
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data.result);
      var countPrice = response.data.result.result;
      that.setData({
        countPrice
      })
    }, function (error) {
      console.log(error);
    });
  },

  //提交订单
  payOrder() {
    var form = this.data.form;
    if (!form.address_id) {
      wx.showModal({
        title: '添加地址',
        content: '没有地址请添加地址',
        showCancel: true, //是否显示取消按钮
        cancelText: "取消", //默认是“取消”
        cancelColor: '#D2D2D2', //取消文字的颜色
        confirmText: "确定", //默认是“确定”
        confirmColor: '#725532', //确定文字的颜色
        success: function (res) {
          if (res.cancel) {
            //点击取消,默认隐藏弹框
          } else {
            wx.navigateTo({
              url: '/pages/my/addresslist/addresslist',
            })

          }
        }
      })
      return;
    }
    if (!form.user_id_card) {
      wx.showModal({
        title: '添加身份信息',
        content: '没有身份信息请添加身份信息',
        showCancel: true, //是否显示取消按钮
        cancelText: "取消", //默认是“取消”
        cancelColor: '#D2D2D2', //取消文字的颜色
        confirmText: "确定", //默认是“确定”
        confirmColor: '#725532', //确定文字的颜色
        success: function (res) {
          if (res.cancel) {
            //点击取消,默认隐藏弹框
          } else {
            wx.navigateTo({
              url: '/pages/my/identitylist/identitylist',
            })

          }
        }
      })
      return;
    }


    var form = this.data.form;
    form.act = 'submit_order';
    var that = this,
      postUrl = `/api/goods/cart3`,
      postData = form,
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data.result);
      that.getPayCode(response.data.result.master_order_sn)
    }, function (error) {
      console.log(error);
    });
  },
  // 支付
  getPayCode(master_order_sn) {
    var that = this,
      postUrl = `/api/payment/getCode`,
      postData = {
        pay_radio: 'pay_code=weixin',
        master_order_sn
      },
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data.result);
      var getResnArray = response.data.result;

      console.log({
        timeStamp: String(getResnArray.timeStamp),
        nonceStr: getResnArray.nonce_str,
        package: 'prepay_id=' + getResnArray.prepay_id,
        signType: 'MD5',
        paySign: getResnArray.sign,
      })


      wx.requestPayment({
        timeStamp: getResnArray.timeStamp,
        nonceStr: getResnArray.nonceStr,
        package: getResnArray.package,
        signType: getResnArray.signType,
        paySign: getResnArray.paySign,
        success(res) {
          wx.switchTab({
            url: '/pages/my/index/index'

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
    var form = ''
    // setTimeout(function () {
    if (option) {
      if (option.goods_id) {
        that.postCart2(option.action, option.goods_id, option.goods_num, app.globalData.tokenInfo.result.token)
        form = {
          action: option.action,
          address_id: '',
          prom_type: '0',
          goods_num: option.goods_num,
          goods_id: option.goods_id,
        }
      } else if (option.cart) {
        that.AsyncUpdateCart(option.cart, app.globalData.tokenInfo.result.token)
        form = {
          action: 'cart',
          address_id: '',
          prom_type: '0',
          goods_num: option.goods_num,
          goods_id: option.goods_id,
        }
      }
    }
    that.setData({
      form
    })
    that.postAddressList();
    that.postIdentity();
    // }, 2000)
  },

  onShow() {

    var form = this.data.form;
    if (app.globalData.checkAddress) {
      var addressInfo = app.globalData.checkAddress;
      form.address_id = addressInfo.address_id
      this.setData({
        addressInfo,
        form
      })
      this.countPrice();
    } else {
      this.postAddressList();
    }
    if (app.globalData.checkIdentity) {
      var identityInfo = app.globalData.checkIdentity;
      form.user_id_name = response.data.result[0].real_name;
      form.user_id_card = response.data.result[0].id_card;
      this.setData({
        identityInfo,
        form
      })
    } else {
      this.postIdentity();
    }
  }

})