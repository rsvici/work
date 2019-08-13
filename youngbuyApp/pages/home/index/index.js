/*
 * @Descripttion: 
 * @version: 
 * @Author: rsvici
 * @Date: 2019-07-26 18:32:36
 * @LastEditors: rsvici
 * @LastEditTime: 2019-08-09 17:08:45
 */
//index.js
//获取应用实例
const app = getApp()
var request = require('../../../utils/request.js'); //require请求
var until = require('../../../utils/util.js'); //require请求
Page({
  data: {
    shopInfoObj: {
      // 琳妮
      20: [
        // banner
        {
          name: 'banner',
          list: [{
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/banner1.png',
            id: 41
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/banner2.png',
            id: 53
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/banner3.png',
            id: 52
          }]
        },
        //图片
        {
          name: 'image',
          type: '3',
          list: [{
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/t1.png',
            id: 70
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/t2.png',
            id: 65
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/t3.png',
            id: 75
          }]
        },
        // 文字
        {
          name: 'text',
          text: '热销推荐'
        },
        // 图片
        {
          name: 'image',
          type: '2',
          list: [{
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/t4.png',
            id: 130
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/t5.png',
            id: 109
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/t6.png',
            id: 111
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/20/t7.png',
            id: 132
          }]
        },
      ],
      // 茉莉
      22: [
        // 图片
        {
          name: 'image',
          type: '2',
          list: [{
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/22/t1.png',
            id: 138
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/22/t2.png',
            id: 235
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/22/t3.png',
            id: 168
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/22/t4.png',
            id: 165
          }]
        },
        // 文字
        {
          name: 'text',
          text: '热销推荐'
        },
        // 图片
        {
          name: 'image',
          type: '1',
          list: [{
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/22/t6.png',
            id: 135
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/22/t5.png',
            id: 144
          }]
        },
      ],
      23: [
        // banner
        {
          name: 'banner',
          list: [{
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/23/banner1.png',
            id: 178
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/23/banner2.png',
            id: 175
          }]
        }, {
          name: 'image',
          type: '3',
          list: [{
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/23/t1.png',
            id: 192
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/23/t2.png',
            id: 182
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/23/t3.png',
            id: 201
          }]
        }, {
          name: 'image',
          type: '1',
          list: [{
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/23/t5.png',
            id: 185
          }, {
            imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/23/t4.png',
            id: 186
          }]
        },
      ],
      24: [{
        name: 'banner',
        list: [{
          imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/24/banner1.png',
          id: 219
        }, {
          imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/24/banner2.png',
          id: 220
        }]
      }, {
        name: 'image',
        type: '1',
        list: [{
          imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/24/t1.png',
          id: 223
        }, {
          imgUrl: 'http://www.appsun.com.cn/www/youngbuyimg/24/t2.png',
          id: 224
        }]
      }, ]
    },
    shopInfo: [], //显示的商家
    goodsList: [], //商品列表
    storeId:''
  },
  goGoodsList() {
    app.globalData.isSearch = true;
    wx.switchTab({
      url: `/pages/home/list/list`
    })
  },
  goGoodsDetail(e) {
    var goodsid = e.currentTarget.dataset.goodsid;
    wx.navigateTo({
      url: `/pages/goods/detail/detail?goodsid=${goodsid}`,
    })
  },
  postGoodsList(token) { //获取商品列表
    var that = this,
      postUrl = `/api/goods/search`,
      postData = {
        sort: 'is_new',
        store_id: wx.getStorageSync('storeId'),
        // is_public:1
      },
      token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      var goodsList = response.data.result.goods_list;
      wx.setNavigationBarTitle({
        title: goodsList[0].store_info.store_name
      })
      that.setData({
        goodsList
      })
    }, function (error) {
      console.log(error);
    });
  },
  //加入购物车
  joinCart(e) {
    var goodsid = e.currentTarget.dataset.goodsid;
    app.joinCart(goodsid, 1)
  },
  // 获取商户布局
  getStoreInfo(token) {
    var that = this,
      postUrl = `/api/user/storeInfo`,
      postData = {
        store_id: wx.getStorageSync('storeId')
      },
      token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      if (response.data.result.layout_data) {
        var resData = JSON.parse(response.data.result.layout_data);
        console.log(resData)
        that.setData({
          shopInfo: resData
        })
      } else {
        that.setData({
          shopInfo: that.data.shopInfoObj[wx.getStorageSync('storeId')]
        })
      }
    }, function (error) {
      console.log(error);
    });


  },
  onLoad: function (option) {
    
    if (option.storeId) {
      wx.setStorageSync('storeId', option.storeId)
    }else if (option.q) {
      var query = decodeURIComponent(option.q);
      var pair = query.split("=");
      wx.setStorageSync('storeId', pair[1])
    } 

    // 小蘑菇在意大利 storeId = 20
    // 宝贝家全球购 storeId = 22  //茉莉爱日韩
    // 宝贝家海外购 storeId = 23 //琳妮家海外商城
    // 汪汪喵喵海外购 storeId = 24
    // wx.setStorageSync('storeId', 31)
    this.setData({
      storeId:wx.getStorageSync('storeId')
    })

    
    if (app.globalData.tokenInfo) {
      this.postGoodsList(app.globalData.tokenInfo.result.token);
      this.getStoreInfo(app.globalData.tokenInfo.result.token)
    } else {
      app.tokenReadyCallback = res => {
        this.postGoodsList(res.data.result.token);
        this.getStoreInfo(res.data.result.token);
      }
    }
  },
  onShareAppMessage() {
    return {
      title: this.data.goodsList[0].store_info.store_name,
      desc: this.data.goodsList[0].store_info.store_name,
      path: 'pages/home/index/index?storeId=' + this.data.goodsList[0].store_id
    };
  },
})