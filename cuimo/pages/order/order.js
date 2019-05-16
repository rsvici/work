//sort.js
//获取应用实例
const app = getApp()
var courtgoodsNum = 1;
Page({
  data: {
    goodsNum: 1, //数量
    message: '', //留言
    price:1200, //单价
    allprice:0,//总价格
  },
  // 数量
  goodsNumInput: function (e) {

    courtgoodsNum = e.detail.value;
    if (courtgoodsNum == '') {
      courtgoodsNum =1;
    } else {
      courtgoodsNum = Number(courtgoodsNum);
      if (!courtgoodsNum) {
        courtgoodsNum =1;
      }
    }

    this.setData({
      goodsNum: courtgoodsNum
    });
    this.numDel();

  },
  // 留言信息
  messageInput: function (e) {
    this.setData({
      message: e.detail.value
    });
  },

  // 减小数量
  numDel: function () {
    courtgoodsNum--;
    if (courtgoodsNum <= 1) {
      courtgoodsNum = 1;
    }
    this.setData({
      goodsNum: courtgoodsNum
    });
    this.numBol();
  },
  // 增加数量
  numAdd: function () {
    courtgoodsNum++;
    this.setData({
      goodsNum: courtgoodsNum
    });
    this.numBol();
  },
  // 计算价格
  numBol() {
    var price=this.data.price;
    var goodsNum=this.data.goodsNum;
    var allprice=price*goodsNum;
    this.setData({
      allprice
    })

  }





})