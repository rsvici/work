

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

var imgtype = "jpg";
if (Player.imgExt != null && Player.imgExt != undefined) {
    imgtype = Player.imgExt;
}


var htmldesc = $("meta[name='description']").attr("content");
if (htmldesc == undefined || htmldesc == "" || htmldesc == null) {
    htmldesc = document.title;
}


function onBridgeReady(){
    WeixinJSBridge.call('showOptionMenu');
}

if (typeof WeixinJSBridge == "undefined"){
    if( document.addEventListener ){
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    }else if (document.attachEvent){
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
}else{
    onBridgeReady();
}


var hrefArr = document.location.href.split('/');
var pagename = hrefArr[hrefArr.length - 1];
var imgpath = document.location.href.replace(pagename, "");//获取当前页面链接的资源路径


$.ajax({
    url: "http://sam.winbiz.cn/winbizwebapi/getwxaccesstoken.ashx?t="+ (new Date().getTime().toString()) +"&url="+encodeURIComponent(document.location.href),
    contentType: "application/json",
    dataType: 'jsonp',
    jsonp: 'callback',
    async: false,
    type: 'post',
    beforeSend: function () {

    },
    success: function (data) {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.AppId, // 必填，公众号的唯一标识
            timestamp: data.Timestamp.toString(), // 必填，生成签名的时间戳
            nonceStr: data.Timestamp.toString(), // 必填，生成签名的随机串
            signature: data.Signature,// 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });





        wx.ready(function () {

            wx.onMenuShareTimeline({
                title: document.title, // 分享标题
                link: document.location.href, // 分享链接
                imgUrl: imgpath + 'Res/Small/0.' + imgtype, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareAppMessage({
                title: document.title,
                desc: htmldesc,
                link: document.location.href,
                imgUrl: imgpath + 'Res/Small/0.' + imgtype,
                trigger: function (res) {
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    //alert('已分享');
                },
                cancel: function (res) {
                    //alert('已取消');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });


        });



    },
    complete: function (jqXHR, textStatus) {
    }
});
            