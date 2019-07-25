//index.js
//获取应用实例
const app = getApp()
var WxParse = require('../../../wxParse/wxParse.js');
var request = require('../../../utils/request.js'); //require请求
var until = require('../../../utils/util.js'); //
var tips = require('../../../utils/tip.js'); //
Page({
  data: {
    pickerIndex: '',
    evaluate: [{
        imgurl: 'http://www.appsun.com.cn/www/yb/goods/detail/logo.png',
        name: 'Mis Emma',
        date: '2018-06-17 12:25',
        text: '11号下的单今天下午才送到的，刚到手立马就把嘴上的口红擦掉试这个了，哈哈哈哈，有一种巧克力的味道，颜色比想象的暗一点，没打底涂嘴上也不算很干测试测试测试没打底涂嘴上也不算很干测试测试测试',
        type: 'Chilli 秀智色/小辣椒色',
        star: [1, 1, 1, 1],
        support: 2,
      },
      {
        imgurl: 'http://www.appsun.com.cn/www/yb/goods/detail/logo.png',
        name: 'Mis Emma',
        date: '2018-06-17 12:25',
        text: '11号下的单今天下午才送到的，刚到手立马就把嘴上的口红擦掉试这个了，哈哈哈哈，有一种巧克力的味道，颜色比想象的暗一点，没打底涂嘴上也不算很干测试测试测试没打底涂嘴上也不算很干测试测试测试',
        type: 'Chilli 秀智色/小辣椒色',
        star: [1, 1, 1],
        support: 3,
      },
      {
        imgurl: 'http://www.appsun.com.cn/www/yb/goods/detail/logo.png',
        name: 'Mis Emma',
        date: '2018-06-17 12:25',
        text: '11号下的单今天下午才送到的，刚到手立马就把嘴上的口红擦掉试这个了，哈哈哈哈，有一种巧克力的味道，颜色比想象的暗一点，没打底涂嘴上也不算很干测试测试测试没打底涂嘴上也不算很干测试测试测试',
        type: 'Chilli 秀智色/小辣椒色',
        star: [1, 1, 1, 1, 1],
        support: 1
      },
    ],
    goodsNum: 1, //商品数量
    goodsInfo: {}, //商品详情
  },
  // 增加数量
  addGoodsNum() {
    var goodsNum = this.data.goodsNum;
    goodsNum++
    if (goodsNum > this.data.goodsInfo.goods.store_count) goodsNum = this.data.goodsInfo.goods.store_count;
    this.setData({
      goodsNum
    })
  },
  // 减少数量
  minusGoodsNum() {
    var goodsNum = this.data.goodsNum;
    goodsNum--;
    if (goodsNum < 1) goodsNum = 1;
    this.setData({
      goodsNum
    })
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
  goCart(){
    wx.switchTab({
      url: '/pages/goods/shopcar/shopcar',
    })
  },
  // 获取商品详情
  postGoodsInfo(id, token) {
    var that = this,
      postUrl = `/api/goods/goodsInfo`,
      postData = {
        id
      };

    request.requestPost(postUrl, postData, token).then(function (response) {
      console.log(response.data)
      that.setData({
        goodsInfo: response.data.result
      })
      wx.setNavigationBarTitle({
        title: response.data.result.goods.goods_name
      })
      // 绑定html
      var article = response.data.result.goods.goods_content
      WxParse.wxParse('article', 'html', article, that, 0);


    }, function (error) {
      console.log(error);
    });
  },
  // 去下单
  gopay() {
    wx.navigateTo({
      url: `/pages/goods/pay/pay?action=buy_now&goods_id=${this.data.goodsInfo.goods.goods_id}&goods_num=${this.data.goodsNum}`,
    })

  },
  onLoad: function (option) {
    var goodsid = '';
    if (option.goodsid) {
      goodsid = option.goodsid
    } else {
      goodsid = 13;
    }

    this.postGoodsInfo(goodsid, app.globalData.tokenInfo.result.token);

  }
})