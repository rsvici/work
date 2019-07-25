const formatTime = date => { //格式化时间
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const countTime = endDate => { //倒计时
  var that = this;
  var date = new Date();
  var now = date.getTime();
  var endDate = new Date(endDate); //设置截止时间
  var end = endDate.getTime();
  var leftTime = end - now; //时间差                              
  var d, h, m, s;
  if (leftTime >= 0) {
    // d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
    m = Math.floor(leftTime / 1000 / 60 % 60);
    s = Math.floor(leftTime / 1000 % 60);
    s = s < 10 ? "0" + s : s
    m = m < 10 ? "0" + m : m
    h = h < 10 ? "0" + h : h
    return {
      h,
      m,
      s
    }
  } else {
    return {
      h: '00',
      m: '00',
      s: '00'
    }
  }
}

module.exports = {
  formatTime,
  countTime,
}