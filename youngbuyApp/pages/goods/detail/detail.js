/*
 * @Descripttion: 
 * @version: 
 * @Author: rsvici
 * @Date: 2019-06-04 11:12:28
 * @LastEditors: rsvici
 * @LastEditTime: 2019-08-09 15:26:43
 */
//index.js
//获取应用实例
const app = getApp()
var WxParse = require('../../../wxParse/wxParse.js');
var request = require('../../../utils/request.js'); //require请求
var until = require('../../../utils/util.js'); //
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
    isUrlOpenApp: false, //是否通过二维码进入小程序
  },
  // 增加数量
  addGoodsNumFun() {
    var goodsNum = this.data.goodsNum;
    goodsNum++
    if (goodsNum > this.data.goodsInfo.goods.store_count) {
      wx.showToast({
        title: '商品数量不得大于商品库存',
        icon: 'none'
      })
      goodsNum = this.data.goodsInfo.goods.store_count;
    }
    this.setData({
      goodsNum
    })
  },
  // 减少数量
  minusGoodsNumFun() {
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
    app.joinCart(goodsid, this.data.goodsNum)
  },
  // 去购物车
  goCart() {
    wx.switchTab({
      url: '/pages/goods/shopcar/shopcar',
    })
  },
  // 去首页
  gohome() {
    wx.switchTab({
      url: '/pages/home/index/index',
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
      // wx.setNavigationBarTitle({
      //   title: response.data.result.goods.goods_name
      // })
      // 绑定html
      var article = response.data.result.goods.goods_content
      WxParse.wxParse('article', 'html', article, that, 0);
      if (that.data.isUrlOpenApp) {
        wx.setStorageSync('storeId', response.data.result.goods.store_id);
      }
    }, function (error) {
      console.log(error);
    });
  },
  // 去下单
  gopay() {
    if (wx.getStorageSync('storeId') == 20 || wx.getStorageSync('storeId') == 24) {
      wx.showToast({
        title: '店铺升级中,商品暂时无法购买。',
        icon: "none",
        mask: true,
        duration: 1000,
        success() {}
      });
      return false;
    }
    var url = `/pages/goods/pay/pay?action=buy_now&goods_id=${this.data.goodsInfo.goods.goods_id}&goods_num=${this.data.goodsNum}`
    app.isRegister(url);
  },
  onLoad: function (option) {
    var that=this;
    var goodsid = '';
    if (option.goodsid) {
      goodsid = option.goodsid
      that.setData({
        isUrlOpenApp: false
      })
    } else if (option.q) {
      var query = decodeURIComponent(option.q);
      var pair = query.split("=");
      that.setData({
        isUrlOpenApp: true
      })
      goodsid = pair[1];
    } else {
      goodsid = 31;
      that.setData({
        isUrlOpenApp: false
      })
    }
    if(option.storeid){
      wx.setStorageSync('storeId', option.storeid)
    }

    if (app.globalData.tokenInfo) {
      this.postGoodsInfo(goodsid, app.globalData.tokenInfo.result.token);
    } else {
      app.tokenReadyCallback = res => {
        console.log(res);
        this.postGoodsInfo(goodsid, res.data.result.token);
      }
    }
  },
  onShareAppMessage() {
    return {
      title: this.data.goodsInfo.goods.goods_name,
      desc: this.data.goodsInfo.goods.goods_name,
      path: 'pages/goods/detail/detail?goodsid=' + this.data.goodsInfo.goods.goods_id+'&storeid='+wx.getStorageSync('storeId')
    };
  }
})