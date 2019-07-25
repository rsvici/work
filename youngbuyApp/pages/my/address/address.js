//address.js
//获取应用实例
var request = require('../../../utils/request.js'); //require请求
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [],
    multiIndex: [0, 0, 0, 0],
    choiceaddress: false,
    addressInfo: '', //地址信息
    form: {
      consignee: '',
      mobile: '',
      province: '',
      city: '',
      district: '',
      twon: '',
      address: '',
      zipcode: '',
      is_default:'1',
    },
  },
  choiceaddressFun() {
    this.setData({
      choiceaddress: true
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    var multiArray = this.data.multiArray;
    var move = e.detail;
    var index = move.column;
    var value = move.value;
    if (index == 0) {
      this.setData({
        multiIndex: [value, 0, 0, 0]
      })
      this.getSiteData(multiArray[0][value].id, 1)
    }
    if (index == 1) {
      this.setData({
        "multiIndex[1]": value,
        "multiIndex[2]": 0,
        "multiIndex[3]": 0
      })
      this.getSiteData(multiArray[1][value].id, 2)
    }
    if (index == 2) {
      this.setData({
        "multiIndex[2]": value,
        "multiIndex[3]": 0,
      })
      this.getSiteData(multiArray[2][value].id, 3)
    }
    if (index == 3) {
      this.setData({
        "multiIndex[3]": value
      })
      this.getSiteData(multiArray[3][value].id, 4)
    }
  },
  getSiteData(parent_id, num, token) {
    var that = this,
      postUrl = `/api/user/get_region`,
      postData = {
        parent_id
      };

    if (!token) {
      console.log(token, app);
      var token = app.globalData.tokenInfo.result.token
    }
    var multiArray = this.data.multiArray;
    request.requestPost(postUrl, postData, token, true).then(function (response) {
      var addressdata = response.data.result;
      var newdata = [];
      addressdata.forEach((val, key) => {
        newdata.push(val)
      });

      multiArray[num] = newdata
      that.setData({
        multiArray
      })

      num++;
      if (num > 3) {
        return
      }
      that.getSiteData(addressdata[0].id, num)
    }, function (error) {
      console.log(error);
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
    var choiceaddress = this.data.choiceaddress;
    var addressInfo = this.data.addressInfo;
    var promptMessage = '';
    console.log(form);
    if (form.address == '') {
      promptMessage = "请您填写详细地址"
    }
    if (form.zipcode == '') {
      promptMessage = "请您填写邮政编码"
    }
    if (form.consignee == '') {
      promptMessage = "请您填写收件人姓名"
    }

    if (form.mobile == '') {
      promptMessage = "请您填写手机号"
    }
    //  else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(form.mobile))) {
    //   promptMessage = "手机号输入有误，请输入有效手机号"
    // }
    if (choiceaddress) {
      form.province = this.data.multiArray[0][this.data.multiIndex[0]].id;
      form.city = this.data.multiArray[1][this.data.multiIndex[1]].id;
      form.district = this.data.multiArray[2][this.data.multiIndex[2]].id;
      form.twon = this.data.multiArray[3][this.data.multiIndex[3]].id;
    }else if(addressInfo){

    } else {
      promptMessage = "请您选择所在地区"
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

    var that = this,
      postUrl = `/api/user/modify_address`,
      postData = form,
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      wx.showToast({
        title: '添加地址成功',
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
  getAddressInfo(address_id) {
    var that = this,
      postUrl = `/api/user/get_address_info`,
      postData = {
        address_id
      },
      token = app.globalData.tokenInfo.result.token;
    request.requestPost(postUrl, postData, token).then(function (response) {
      var form = response.data.result;
      var addressInfo=`${form.province_name}${form.city_name}${form.district_name}${form.twon_name}`
      that.setData({
        form,addressInfo
      })
    }, function (error) {
      console.log(error);
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSiteData(0, 0, app.globalData.tokenInfo.result.token);
    if (options.address_id) {
      wx.setNavigationBarTitle({
        title: '修改地址'
      })
      this.getAddressInfo(options.address_id);
    }
  },
})