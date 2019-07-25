//address.js
//获取应用实例
var request = require('../../../utils/request.js'); //require请求
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    front_img: [],
    back_img: [],
    form: {
      real_name: '',
      id_card: '',
      mobile: '',
      front_img: '',
      back_img: '',
      is_default: '1',
    },
  },
  // 添加图片
  addImg: function (e) {
    var type = e.currentTarget.dataset.type;
    var that = this;
    var form = this.data.form;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        wx.uploadFile({
          url: app.globalData.url.upload + '/api/uploadify/imageUp', // 仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            token: app.globalData.tokenInfo.result.token
          },
          success(res) {
            console.log(res)
            var ImgAdd = JSON.parse(res.data).result.url;
            ImgAdd = ImgAdd.replace(/\\/g, '/')
            console.log(ImgAdd);
            form[type] = ImgAdd;
            console.log(form);
            that.setData({
              form,
            });
          }
        })
      }
    });
  },

  changeInput(event) {
    var name = event.currentTarget.dataset.name,
      value = event.detail.value,
      form = this.data.form;
    form[name] = value;
    this.setData({
      form
    });
    console.log(name + ':' + form[name]);
  },

  addressSuccess() {
    var form = this.data.form;
    var promptMessage = '';
    console.log(form);
    if (form.real_name == '') {
      promptMessage = "请您填写身份证姓名"
    }
    if (form.id_card == '') {
      promptMessage = "请您填写身份证号"
    }
    if (form.mobile == '') {
      promptMessage = "请您填写手机号码"
    }

    //  else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(form.mobile))) {
    //   promptMessage = "手机号输入有误，请输入有效手机号"
    // }

    if (promptMessage) {
      wx.showToast({
        title: promptMessage,
        icon: 'none',
        duration: 1500,
        complete: function () {}
      })
      return
    }

    var that = this,
      postUrl = `/api/user/save_user_identity`,
      postData = form,
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      wx.showToast({
        title: '添加身份成功',
        icon: 'none',
        duration: 1500,
        complete: function () {
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            })
          }, 1000)
        }
      })
    }, function (error) {
      console.log(error);
    });
  },
  getUserIdentity(identity_id) {
    var that = this,
      postUrl = `/api/user/get_user_identity`,
      postData = {
        identity_id
      },
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      var form = response.data.result;
      that.setData({
        form
      })
    }, function (error) {
      console.log(error);
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (options.identity_id) {
      wx.setNavigationBarTitle({
        title: '修改身份信息'
      })
      this.getUserIdentity(options.identity_id);
    }


  },
})