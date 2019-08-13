/*
 * @Descripttion: 
 * @version: 
 * @Author: rsvici
 * @Date: 2019-06-20 13:56:07
 * @LastEditors: rsvici
 * @LastEditTime: 2019-08-09 15:23:18
 */
//login.js
//获取应用实例
var request = require('../../../utils/request.js'); //require请求
const app = getApp()

Page({
  data: {
    isAllSelect: false, //是否已经全选
    totalMoney: 0, //总价格
    totalNum: 0, //商品数量
    isSpecstypeShow: false, //打开规格
    // 商品详情介绍
    carts: [],
    goodsList: [], //商品列表
  },
  //勾选事件处理函数 1 
  switchSelect: function (e) {
    let index = parseInt(e.target.dataset.index),
      goodsindex = e.target.dataset.gooodsindex;
    if (this.data.carts[index].cartList[goodsindex].selected) {
      this.data.carts[index].cartList[goodsindex].selected = 0
    } else {
      this.data.carts[index].cartList[goodsindex].selected = 1
    }
    this.settleAccounts(this.data.carts);
    // this.changCartNum({
    //   id: this.data.carts[index].cartList[goodsindex].id,
    //   goods_num: this.data.carts[index].cartList[goodsindex].goods_num,
    //   selected: this.data.carts[index].cartList[goodsindex].selected
    // })
    this.setData({
      carts: this.data.carts,
    })
  },
  //全选
  allSelect: function (e) {
    if (!this.data.isAllSelect) {
      for (let i = 0; i < this.data.carts.length; i++) {
        for (let j = 0; j < this.data.carts[i].cartList.length; j++) {
          this.data.carts[i].cartList[j].selected = true;
        }
      }
    } else {
      for (let i = 0; i < this.data.carts.length; i++) {
        for (let j = 0; j < this.data.carts[i].cartList.length; j++) {
          this.data.carts[i].cartList[j].selected = false;
        }
      }
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect
    })
    this.settleAccounts(this.data.carts);

  },
  // 去结算
  toBuy() {
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
    var carts = this.data.carts;
    var goBuy = [];
    for (let i = 0; i < carts.length; i++) {
      for (let j = 0; j < carts[i].cartList.length; j++) {
        if (carts[i].cartList[j].selected) {
          goBuy.push({
            id: carts[i].cartList[j].id,
            goods_num: carts[i].cartList[j].goods_num,
            selected: 1,
          })
        }
      }
    }
    goBuy = JSON.stringify(goBuy)
    wx.navigateTo({
      url: `/pages/goods/pay/pay?cart=${goBuy}`
    })

  },
  //数量变化处理1
  addGoodsNum(e) { //添加1
    console.log('++')
    var index = parseInt(e.currentTarget.dataset.index),
      goodsindex = parseInt(e.currentTarget.dataset.gooodsindex);
    this.data.carts[index].cartList[goodsindex].goods_num++;
    if (this.data.carts[index].cartList[goodsindex].goods_num > this.data.carts[index].cartList[goodsindex].store_count) {
      this.data.carts[index].cartList[goodsindex].goods_num = this.data.carts[index].cartList[goodsindex].store_count
    }
    this.settleAccounts(this.data.carts);
    this.changCartNum({
      id: this.data.carts[index].cartList[goodsindex].id,
      goods_num: this.data.carts[index].cartList[goodsindex].goods_num,
      selected: 1,
      // selected: this.data.carts[index].cartList[goodsindex].selected
    })
    this.setData({
      carts: this.data.carts,
    })
  },
  minusGoodsNum(e) { //减少1
    console.log('--')
    var index = parseInt(e.currentTarget.dataset.index),
      goodsindex = parseInt(e.currentTarget.dataset.gooodsindex);
    this.data.carts[index].cartList[goodsindex].goods_num--
    if (this.data.carts[index].cartList[goodsindex].goods_num < 1) {
      this.data.carts[index].cartList[goodsindex].goods_num = 1
    }
    this.settleAccounts(this.data.carts);
    this.changCartNum({
      id: this.data.carts[index].cartList[goodsindex].id,
      goods_num: this.data.carts[index].cartList[goodsindex].goods_num,
      // selected: this.data.carts[index].cartList[goodsindex].selected
      selected: 1
    })
    this.setData({
      carts: this.data.carts,
    })
  },
  settleAccounts(carts) { //计算价格1
    console.log(carts);
    let totalMoney = 0,
      Allprice = 0,
      isAllSelect;
    for (let i = 0; i < carts.length; i++) {
      for (let j = 0; j < carts[i].cartList.length; j++) {
        if (carts[i].cartList[j].selected) {
          totalMoney = totalMoney + Number(carts[i].cartList[j].goods_price * carts[i].cartList[j].goods_num);
        }
        Allprice += Number(this.data.carts[i].cartList[j].goods_price * this.data.carts[i].cartList[j].goods_num);
      }
    }
    if (Allprice == totalMoney) {
      isAllSelect = true;
    } else {
      isAllSelect = false;
    }
    this.setData({ // 最后赋值到data中渲染到页面
      totalMoney,
      isAllSelect
    });
  },
  // 修改购物车数量 / 选中状态
  changCartNum(postData) {
    var that = this,
      postUrl = `/api/goods/changeNum`,
      postData,
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token, true).then(function (response) {
      console.log(response.data)
    }, function (error) {
      console.log(error);
    });
  },
  // 滑动删除
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    var carts = this.data.carts
    //开始触摸时 重置所有删除
    carts.forEach(function (a, b) {
      a.cartList.forEach(function (v, i) {
        if (v.isTouchMove) //只操作为true的
          v.isTouchMove = false;
      })
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      carts
    })
  },
  //滑动事件处理
  touchmove(e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      goodsindex = e.currentTarget.dataset.goodsindex, //当前索引
      startX = that.data.startX, //开始X坐标
      startY = that.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    console.log(e, index, goodsindex)

    var carts = that.data.carts
    carts.forEach(function (a, b) {
      a.cartList.forEach(function (v, i) {
        v.isTouchMove = false;
        //滑动超过30度角 return
        if (Math.abs(angle) > 30) return;
        if (b == index) {
          if (i == goodsindex) {
            if (touchMoveX > startX) { //右滑
              v.isTouchMove = false;
            } else { //左滑
              v.isTouchMove = true;
            }
          }
        }
      })
    })
    //更新数据
    console.log(carts);
    that.setData({
      carts
    });
  },
  // 计算滑动角度
  angle(start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  deleteCart(e) {
    console.log(e)
    var that = this;
    var id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '删除商品',
      content: '确定删除这个商品吗？',
      showCancel: true, //是否显示取消按钮
      cancelText: "取消", //默认是“取消”
      cancelColor: '#D2D2D2', //取消文字的颜色
      confirmText: "确定", //默认是“确定”
      confirmColor: '#725532', //确定文字的颜色
      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {

          var postUrl = `/api/goods/deleteCart`,
            postData = {
              cart_ids: id
            },
            token = app.globalData.tokenInfo.result.token;
          request.requestPost(postUrl, postData, token).then(function (response) {

            that.getCartList()
          }, function (error) {
            console.log(error);
          });


        }
      }
    })
  },
  // 打开规格列表
  isSpecstype(e) {
    this.data.isSpecstypeShow = !this.data.isSpecstypeShow;
    this.setData({
      isSpecstypeShow: this.data.isSpecstypeShow
    })
  },
  getCartList() {
    var that = this,
      postUrl = `/api/goods/cartList`,
      postData = {

      },
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      that.setData({
        carts: response.data.result.storeCartList,
        totalNum: response.data.result.userCartGoodsTypeNum
      })
      that.settleAccounts(response.data.result.storeCartList);
    }, function (error) {
      console.log(error);
    });
  },
  postGoodsList(token) { //获取商品列表
    var that = this,
      postUrl = `/api/goods/search`,
      postData = {
        store_id: wx.getStorageSync('storeId')
      },
      token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      var goodsList = response.data.result.goods_list;
      that.setData({
        goodsList
      })
    }, function (error) {
      console.log(error);
    });
  },
  joinCart(e) { //加入购物车
    var that = this;
    var goodsid = e.currentTarget.dataset.goodsid;
    app.joinCart(goodsid, 1).then(res => {
      console.log(res)
      that.getCartList();
    })


  },
  goDetail(e) {
    var goodsid = e.currentTarget.dataset.goodsid;
    wx.navigateTo({
      url: `/pages/goods/detail/detail?goodsid=${goodsid}`,
    })
  },
  onShow() {
    this.getCartList();
    this.postGoodsList(app.globalData.tokenInfo.result.token);
  },
})