//my.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  choiceAddress() { //选择地址
    console.log(1);
    wx.getSetting({
      success(res) {
        wx.chooseAddress({
          success(res) {
            console.log(res.userName)
            console.log(res.postalCode)
            console.log(res.provinceName)
            console.log(res.cityName)
            console.log(res.countyName)
            console.log(res.detailInfo)
            console.log(res.nationalCode)
            console.log(res.telNumber)
          }
        })
      }
    })

  },
  navigateToNewApp(event) {
    var url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: '/pages/' + url // 页面 
    })
  },
  goback() {
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function () {

  },

})