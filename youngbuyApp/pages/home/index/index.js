//index.js
//获取应用实例
const app = getApp()

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
    ]
    ,
    newsImgUrls: [
      'http://www.appsun.com.cn/www/yb/home/new1.png',
      'http://www.appsun.com.cn/www/yb/home/new2.png',
      'http://www.appsun.com.cn/www/yb/home/new3.png',
      'http://www.appsun.com.cn/www/yb/home/new1.png',
      'http://www.appsun.com.cn/www/yb/home/new2.png',
      'http://www.appsun.com.cn/www/yb/home/new3.png',
    ],
    endDate2: '2019-06-04 11:41:00',
    countdown:{},
  },
  countTime() {
    var that = this;
    var date = new Date();
    var now = date.getTime();
    var endDate = new Date(that.data.endDate2);//设置截止时间
    var end = endDate.getTime();
    var leftTime = end - now; //时间差                              
    var d, h, m, s;
    if (leftTime >= 0) {
      // d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      m = Math.floor(leftTime / 1000 / 60 % 60);
      s = Math.floor(leftTime / 1000 % 60);
      s = s < 10 ? "0" + s : s
      m = m < 10 ? "0" + m : m
      h = h < 10 ? "0" + h : h
      that.setData({
        countdown:{
          h,m,s
        }
      })
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(that.countTime, 1000);
    } else {
      
      that.setData({
        countdown:{
          h:'00',m:'00',s:'00'
        }
      })
    }
   
  },
  onLoad: function () {
    this.countTime();
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  }
})