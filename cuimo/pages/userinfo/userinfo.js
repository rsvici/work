var request = require('../../utils/requestService.js'); //require请求
var interval;
var tempFilePaths;
var tempFilePathsOne;
Page({
    data: {
        index:0,
        telBtn: '获取验证码', //提示
        code: '', //输入验证码
        currentTime: 60, // 初始事件
        rightMobileNo: 0, //获取验证码
        entmobileBol: false, //确定按钮的显示颜色
        tel: '手机号', //手机号
        isUpd: false, //是否是修改
        isNoGetCode: false,
        isNoPostUserInfo: false,
        array: ['店主', '员工']
    },
     // 添加图片
     addImg: function() {
        var that = this;

        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    isCanvas: true
                });
                tempFilePaths = res.tempFilePaths;
                that.setData({
                    tempFilePaths: tempFilePaths
                });

            }
        });


    },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    telInput: function (e) {
        this.setData({
            tel: e.detail.value
        });
    },
    codeInput: function (e) {
        this.setData({
            code: e.detail.value
        });
        if (e.detail.value.length == 6) {
            this.setData({
                entmobileBol: true
            })
        } else {
            this.setData({
                entmobileBol: false
            })
        }
    },
   
    onLoad: function (option) {
        if (option.type === 'upd') {
            console.log(1)
            this.setData({
                tel: wx.getStorageSync('phone'),
                isUpd: true
            })
        }
    }
});