//my.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.currentTarget.dataset.current;
    console.log(this.data.currentTab, e);
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      });
    }
    if (cur == 0) {

    }
  },


  onLoad: function (option) {
    var orderId = option.orderId;
    this.setData({
      currentTab: orderId
    })
  },

})