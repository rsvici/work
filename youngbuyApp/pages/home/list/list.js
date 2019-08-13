//index.js
//获取应用实例
const app = getApp()
var request = require('../../../utils/request.js'); //require请求
var until = require('../../../utils/util.js'); //require请求
var tips = require('../../../utils/tip.js'); //require请求
Page({
  data: {
    goodsList: [], //商品列表
    token: '', //token
    // 价格筛选
    choicPriceRoundObj: {
      max: '',
      min: ''
    },
    formData: {
      p: 1
    },
    // 没商品阻止下拉
    dontUpLoading: false,
    isSearch: false,
  },
  goGoodsDetail(e) {
    var goodsid = e.currentTarget.dataset.goodsid;
    wx.navigateTo({
      url: `/pages/goods/detail/detail?goodsid=${goodsid}`,
    })
  },
  getInputVal(e) {
    var name = e.target.dataset.name,
      value = e.detail.value;
    this.data.choicPriceRoundObj[name] = value;
    this.setData({
      choicPriceRoundObj: this.data.choicPriceRoundObj
    })
  },
  // 取消
  cancelInputPrice() {
    var choicPriceRoundObj = this.data.choicPriceRoundObj,
      formData = this.data.formData;
    choicPriceRoundObj.min = '';
    choicPriceRoundObj.max = '';
    this.setData({
      choicPriceRoundObj
    })
    formData.price = ''
    this.setData({
      formData,
      navtypeChoicePriceShow: false
    })
    this.postGoodsList();
  },
  // 确定
  confirmInputPrice() {
    var choicPriceRoundObj = this.data.choicPriceRoundObj,
      formData = this.data.formData;
    if (!choicPriceRoundObj.max) {
      choicPriceRoundObj.max = 99999
    }
    if (!choicPriceRoundObj.min) {
      choicPriceRoundObj.min = 0
    }
    if (Number(choicPriceRoundObj.max) < Number(choicPriceRoundObj.min)) {
      wx.showToast({
        title: '最大值必须大于等于最小值',
        icon: 'none'
      })
      return;
    }
    formData.price = choicPriceRoundObj.min + '-' + choicPriceRoundObj.max;
    this.setData({
      formData,
      navtypeChoicePriceShow: false
    })
    this.postGoodsList();
  },
  // 价格筛选
  choicPriceRound() {
    this.setData({
      navtypeChoicePriceShow: true
    })
  },
  //搜索
  changeSearch(e) {
    var formData = this.data.formData;
    formData.q = e.detail.value;
    this.setData({
      formData
    })
    this.postGoodsList();
  },
  // 选择排序
  choiceSort(e) {
    console.log(e.currentTarget.dataset.sort);
    var sort = e.currentTarget.dataset.sort;
    var formData = this.data.formData;
    if (sort == 'sales_sum' || sort == 'is_new') {
      formData.sort = sort;
      formData.sort_asc = 'desc';
    } else if (sort == 'shop_price') {
      formData.sort = sort;
      if (formData.sort_asc == 'desc') {
        formData.sort_asc = 'asc'
      } else {
        formData.sort_asc = 'desc'
      }
    }
    this.setData({
      formData
    })
    this.postGoodsList();
  },

  // 获取商品列表
  postGoodsList() {

    var formData = this.data.formData;
    formData.store_id = wx.getStorageSync('storeId');
    formData.p = 1;
    this.setData({
      formData,
      dontUpLoading: false,
    })
    var that = this,
      postUrl = `/api/goods/search`,
      postdata = formData,
      token = this.data.token;
    console.log(token);
    request.requestPost(postUrl, postdata, token).then(function (response) {
      wx.pageScrollTo({
        scrollTop: 0
      })
      var goodsList = response.data.result.goods_list;
      console.log(goodsList);
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
  //上拉加载
  postGoodsTopList() {
    var dontUpLoading = this.data.dontUpLoading;
    if (dontUpLoading) {
      return;
    }
    var goodsList = this.data.goodsList;
    var that = this,
      postUrl = `/api/goods/search`,
      postData = this.data.formData,
      token = this.data.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      var getResnArray = response.data.result.goods_list
      // 判断是否还有
      if (getResnArray.length < 1) {
        that.setData({
          dontUpLoading: true
        })
      }
      goodsList = goodsList.concat(getResnArray)
      that.setData({
        goodsList
      })
    }, function (error) {
      console.log(error);
    });
  },
  // 进入页面
  onLoad: function () {
    var token = '';
    if (app.globalData.tokenInfo) {
      token = app.globalData.tokenInfo.result.token
    } else {
      app.tokenReadyCallback = res => {
        token = res.data.result.token
      }
    }
    this.setData({
      token
    })
    this.postGoodsList();

  },
  onShow() {
    if (app.globalData.isSearch) {
      this.setData({
        isSearch: app.globalData.isSearch
      })
      app.globalData.isSearch = false;
    }
  },
  onShareAppMessage() {
    return {
      title: this.data.goodsList[0].store_info.store_name,
      desc: this.data.goodsList[0].store_info.store_name,
      path: 'pages/home/index/index?storeId=' + this.data.goodsList[0].store_id
    };
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.setData({
      formData: {
        p: 1
      },
      dontUpLoading: false,
    })
    this.postGoodsList();
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 500)
  },
  // 上拉加载
  onReachBottom() {
    var formData = this.data.formData;
    formData.p = formData.p + 1
    this.setData({
      formData
    })
    this.postGoodsTopList()
  }
})