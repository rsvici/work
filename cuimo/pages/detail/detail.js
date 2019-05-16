//sort.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../imgs/detail.png',
      '../../imgs/detail.png',
      '../../imgs/detail.png',
    ],
    indicatorDots: false, //显示指示点
    autoplay: false, //循环
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    current: 0, //滑块当前页码
    goodsList: [{
        name: '萃沫设备',
        price: '10000',
        url: '../../imgs/goods.png'
      },
      {
        name: '萃沫设备',
        price: '10000',
        url: '../../imgs/goods.png'
      }, {
        name: '萃沫设备',
        price: '10000',
        url: '../../imgs/goods.png'
      }, {
        name: '萃沫设备',
        price: '10000',
        url: '../../imgs/goods.png'
      }
    ]
  },
  bannerChange(event) { //更新current
    console.log(event)
    this.setData({
      current: event.detail.current
    })
  },
  changCurrent(event) { //设置banner
    console.log(event.currentTarget.dataset.current)
    var current = this.data.current;
    var currentMath = event.currentTarget.dataset.current;
    if (currentMath == "+") {
      current++
      if (current > 2) {
        current = 0
      }
    } else {
      current--
      if (current < 0) {
        current = 2
      }
    }
    console.log(current)
    this.setData({
      current
    })
  }






})