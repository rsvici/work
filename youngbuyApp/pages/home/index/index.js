//index.js
//获取应用实例
const app = getApp()
var request = require('../../../utils/request.js'); //require请求
var until = require('../../../utils/util.js'); //require请求
var tips = require('../../../utils/tip.js'); //require请求
Page({
  data: {
    imgUrls: [
      'http://www.appsun.com.cn/www/yb/home/banner.png',
      'http://www.appsun.com.cn/www/yb/home/banner.png',
      'http://www.appsun.com.cn/www/yb/home/banner.png',
    ],
    scalesImgUrls: [
      'http://www.appsun.com.cn/www/yb/home/scale1.png',
      'http://www.appsun.com.cn/www/yb/home/scale2.png'
    ],
    pintuanImgUrls: [
      'http://www.appsun.com.cn/www/yb/home/pt1.png',
      'http://www.appsun.com.cn/www/yb/home/pt2.png',
      'http://www.appsun.com.cn/www/yb/home/pt3.png',
      'http://www.appsun.com.cn/www/yb/home/pt4.png',
    ],
    advanceImgUrls: [
      'http://www.appsun.com.cn/www/yb/home/ys1.png',
      'http://www.appsun.com.cn/www/yb/home/ys2.png',
    ],
    newsImgUrls: [
      'http://www.appsun.com.cn/www/yb/home/new1.png',
      'http://www.appsun.com.cn/www/yb/home/new2.png',
      'http://www.appsun.com.cn/www/yb/home/new3.png',
      'http://www.appsun.com.cn/www/yb/home/new1.png',
      'http://www.appsun.com.cn/www/yb/home/new2.png',
      'http://www.appsun.com.cn/www/yb/home/new3.png',
    ],
    endDate2: '2019-07-26 11:41:00', //模拟截至时间
    countdown: { //初始时间
      h: '00',
      m: '00',
      s: '00',
    },
    goodsList: [], //商品列表
  },

  postGoodsList(token) { //获取商品列表
    console.log(token);
    var that = this,
      postUrl = `/api/goods/goodsList`,
      postData = {},
      token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      that.setData({
        goodsList: response.data.result
      })
    }, function (error) {
      console.log(error);
    });
  },
  // 去详情
  goDetail(e) {
    var goodsid = e.currentTarget.dataset.goodsid;
    if (app.globalData.tokenInfo.result.is_register) {
      wx.navigateTo({
        url: `/pages/goods/detail/detail?goodsid=${goodsid}`,
      })
    } else {
      console.log(tips);
      tips.success('请登录', 1000).then(function (param) {
        wx.navigateTo({
          url: '/pages/my/login/login',
        })
      })
    }
  },
  //加入购物车
  joinCart(e) {
    var goodsid = e.currentTarget.dataset.goodsid;
    if (app.globalData.tokenInfo.result.is_register) {
      var that = this,
        postUrl = `/api/goods/addCart`,
        postData = {
          goods_id: goodsid,
          goods_num: 1,
          form: 1
        },
        token = app.globalData.tokenInfo.result.token;
      request.requestPost(postUrl, postData, token).then(function (response) {
        console.log(response)
        wx.showToast({
          title: response.data.message,
          icon: 'none'
        })

      }, function (error) {
        console.log(error);
      });


    } else {
      tips.success('请登录', 1000).then(function (param) {
        wx.navigateTo({
          url: '/pages/my/login/login',
        })
      })
    }
  },
  onLoad: function () {
    var that = this;
    if (app.globalData.tokenInfo) {
      console.log(app.globalData.tokenInfo)
      this.postGoodsList(app.globalData.tokenInfo.result.token);
    } else {
      app.tokenReadyCallback = res => {
        console.log(res);
        this.postGoodsList(res.data.result.token);
      }
    }


    //递归每秒调用countTime方法，显示动态时间效果
    setInterval(function () {
      var countdown = until.countTime(that.data.endDate2)
      that.setData({
        countdown
      })
    }, 1000);
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})