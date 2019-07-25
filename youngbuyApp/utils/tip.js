/**
 * 提示与加载工具类
 */

var success = function (title, duration = 500) {
  setTimeout(() => {
    wx.showToast({
      title: title,
      icon: "success",
      mask: true,
      duration: duration
    });
  }, 300);
  if (duration > 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
}

/**
 * 弹出确认窗口
 */
var confirm = function (text, payload = {}, title = "提示") {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title,
      content: text,
      showCancel: true,
      success: res => {
        if (res.confirm) {
          resolve(payload);
        } else if (res.cancel) {
          reject(payload);
        }
      },
      fail: res => {
        reject(payload);
      }
    });
  });
}

var toast = function (title, onHide, icon = "success") {
  setTimeout(() => {
    wx.showToast({
      title: title,
      icon: icon,
      mask: true,
      duration: 500
    });
  }, 300);

  // 隐藏结束回调
  if (onHide) {
    setTimeout(() => {
      onHide();
    }, 500);
  }
}

/**
 * 警告框
 */
var alert = function (title) {
  wx.showToast({
    title: title,
    image: "../images/alert.png",
    mask: true,
    duration: 1500
  });
}

/**
 * 错误框
 */

var error = function (title, onHide) {
  wx.showToast({
    title: title,
    image: "../images/error.png",
    mask: true,
    duration: 500
  });
  // 隐藏结束回调
  if (onHide) {
    setTimeout(() => {
      onHide();
    }, 500);
  }
}

/**
 * 弹出加载提示
 */
var loading = function (title = "加载中") {
  if (Tips.isLoading) {
    return;
  }
  Tips.isLoading = true;
  wx.showLoading({
    title: title,
    mask: true
  });
}

/**
 * 加载完毕
 */
var loaded = function () {
  if (Tips.isLoading) {
    Tips.isLoading = false;
    wx.hideLoading();
  }
}

var share = function (title, url, desc) {
  return {
    title: title,
    path: url,
    desc: desc,
    success: function (res) {
      Tips.toast("分享成功");
    }
  };
}


/**
 * 静态变量，是否加载中
 */
module.exports = {
  success,
  confirm,
  toast,
  alert,
  error,
  loading,
  loaded,
  share,
};