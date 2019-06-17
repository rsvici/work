// if (!localStorage.getItem("temp")) {
//   $('.shadow').css({
//     display: 'block'
//   });
// }

var shadowNum = 0;
var closeShadow = function () {
  shadowNum++
  $('.shadow img').eq(shadowNum).fadeIn().siblings('img').fadeOut()

  if (shadowNum >= 3) {
    $('.shadow').fadeOut();
    $('.close').fadeOut();
    // localStorage.setItem("temp", true);
  }
}

// 放大缩小事件
map.on('zoomend', function (e) {
  if (map.getZoom() > 16) {
    object3Dlayer.remove(prism)
    object3Dlayer.remove(meshLine)
  } else {
    object3Dlayer.add(prism)
    object3Dlayer.add(meshLine)
  }

  if (map.getZoom() > 15) {
    $('.amap-marker-label').css({
      display: 'block',
    })
  } else {
    $('.amap-marker-label').css({
      display: 'none',
    })
  }
})



//点击事件
map.on('click', function (ev) {
  // 触发事件的对象
  var target = ev.target

  // 触发事件的地理坐标，AMap.LngLat 类型
  var lnglat = ev.lnglat

  // 触发事件的像素坐标，AMap.Pixel 类型
  var pixel = ev.pixel

  // 触发事件类型
  var type = ev.type
  // console.log(ev);
})

