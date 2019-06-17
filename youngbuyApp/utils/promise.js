/**
 * Promise化小程序接口
 */
var Wechat=function(name, opts) {
    return new Promise((success, fail) => {
      let obj = {
        ...opts,
        ...{
          success,
          fail
        }
      };
      wx[name](obj);
    });
  };

export {
  Wechat
};