//bingphone.js
//获取应用实例
const app = getApp()
var request = require('../../../utils/request.js'); //require请求

Page({
  data: {
    telBtn: '获取验证码', //提示
    code: '', //输入验证码
    currentTime: 60, // 初始事件
    isNoGetCode: false,
    form: { //表单信息
      "mobile": "",
      "code": "",
    },
  },
  changeInput(event) { //input 传值
    var name = event.currentTarget.dataset.name,
      value = event.detail.value,
      form = this.data.form;
    form[name] = value;
    this.setData({
      form
    });
    console.log(name + ':' + form[name]);
  },
  // 获取验证码
  postMobileNo: function () {

    if (this.data.form.mobile.legth < 11 || (!this.data.form.mobile)) {
      return;
    }
    var form = this.data.form;
    if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(form.mobile))) {
      wx.showToast({
        title: "手机号输入有误，请输入有效手机号",
        icon: 'none',
        duration: 1500,
        complete: function () {}
      })
      return
    }
    if (this.data.isNoGetCode) {
      return;
    }
    this.setData({
      isNoGetCode: true
    })
    if (this.data.telBtn == '请重新获取' || this.data.telBtn == '获取验证码') {
      var that = this;
      var postUrl = `/api/user/mp_send_validate_code`;
      var postData = {
        mobile: this.data.form.mobile,
      };
      var token = app.globalData.tokenInfo.result.token;
      request.requestPost(postUrl, postData, token)
        .then(function (response) {
          that.timeOutFun();
        }, function (error) {
          that.setData({
            isNoGetCode: false
          })
          console.log(error);
        });
    }
  },
  // 倒计时60s
  timeOutFun: function () {
    var that = this;
    var currentTime = that.data.currentTime;
    that.setData({
      telBtn: currentTime + '秒'
    });
    var interval = setInterval(function () {
      that.setData({
        telBtn: (currentTime - 1) +
          '秒'
      });
      currentTime--;
      if (currentTime <= 0) {
        clearInterval(interval);
        that.setData({
          currentTime: 60,
          telBtn: '请重新获取',
          isNoGetCode: false
        });
      }
    }, 1000);
  },
  bindMobile: function () {
    var form = this.data.form;
    var promptMessage = '';
    if (form.code == '') {
      promptMessage = "请您填写验证码"
    }
    if (form.mobile == '') {
      promptMessage = "请您填写手机号"
    } else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(form.mobile))) {
      promptMessage = "手机号输入有误，请输入有效手机号"
    }
    if (promptMessage) {
      wx.showToast({
        title: promptMessage,
        icon: 'none',
        duration: 1500,
        complete: function () {}
      })
      return
    }
    var that = this;
    var postUrl = `/api/user/mp_register`;
    var postData = form;
    var token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token)
      .then(function (response) {
        app.globalData.tokenInfo.result.is_register=true;
        wx.showToast({
          title: '注册成功',
          icon: 'none',
          duration: 1500,
          complete: function () {
            setTimeout(function () {
              wx.navigateBack({
                delta: 2
              })
            }, 1500)
          }
        })
      }, function (error) {
        console.log(error);
      });

  },

  onLoad: function () {

  },

})