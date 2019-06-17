//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://www.appsun.com.cn/www/yb/goods/detail/goods.png',
      'http://www.appsun.com.cn/www/yb/goods/detail/goods.png',
      'http://www.appsun.com.cn/www/yb/goods/detail/goods.png',
    ],
    bannerUrls: [{
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI1'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI2'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI3'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI4'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI5'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI6'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI7'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI8'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI9'
    }, {
      url: 'http://www.appsun.com.cn/www/yb/goods/detail/detaill.png',
      title: 'GHLI10'
    }],
    goodsNum: 1, //商品数量
    productDate: ['2019-06-14', '2019-05-13', '2019-04-22', '2019-02-18', '2019-01-04'],
    pickerIndex: '',
  },
  addGoodsNum() {
    var goodsNum = this.data.goodsNum;
    goodsNum++
    this.setData({
      goodsNum
    })
  },
  minusGoodsNum() {
    var goodsNum = this.data.goodsNum;
    goodsNum--;
    if (goodsNum < 1) goodsNum = 1;
    this.setData({
      goodsNum
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '魅可（MAC）经典唇膏 子弹头口红3G'
    })
  }
})