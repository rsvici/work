function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
if (getQueryString('south')) {
  localStorage.setItem('south', getQueryString('south'));
  localStorage.setItem('west', getQueryString('west'));
}

if (getQueryString('endsouth')) {
  $('#dituContent').css({
    height: '60vh'
  })

  var west = localStorage.getItem("west");
  var endwest = getQueryString("endwest");
  var south = localStorage.getItem("south");
  var endsouth = getQueryString("endsouth");

  console.log(west, endwest, south, endsouth)

  var map = new AMap.Map('dituContent', {
    viewMode: '3D',
    pitch: 40,
    zoom: 15,
    center: [endwest, endsouth],
    mapStyle: 'amap://styles/1b743a9ad08ab41893f26529c7019e72',
    buildingAnimation: false,
    showIndoorMap: false,
    indoorMap: false,
    showBuildingBlock: false,
    rotation: 0,
  })
  
  setTimeout(function () {
    var transOptions = {
      map: map,
      city: '上海市',
      panel: 'panel',
      policy: AMap.TransferPolicy.LEAST_TIME
    };
    //构造公交换乘类
    var transfer = new AMap.Transfer(transOptions);
    //根据起、终点坐标查询公交换乘路线
    transfer.search(new AMap.LngLat(west, south), new AMap.LngLat(endwest, endsouth), function (status, result) {
      // result即是对应的公交路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_TransferResult
      if (status === 'complete') {
        log.success('绘制公交路线完成')
      } else {
        log.error('公交路线数据查询失败' + result)
      }
      console.log(status);
    });
  },100)



} else {
  // 创建地图实例
  var map = new AMap.Map('dituContent', {
    viewMode: '3D',
    pitch: 40,
    zoom: 17.5,
    center: [121.404058, 31.211158],
    mapStyle: 'amap://styles/1b743a9ad08ab41893f26529c7019e72',
    buildingAnimation: false,
    showIndoorMap: false,
    indoorMap: false,
    showBuildingBlock: false,
    rotation: 0,
  })

  $('.shadow').css({
    display: 'block'
  });
  $('.close').css({
    display: 'block'
  });
}




// // 设置光照属性/
map.AmbientLight = new AMap.Lights.AmbientLight([1, 1, 1], 0.9)
map.DirectionLight = new AMap.Lights.DirectionLight(
  [0, -1, 1],
  [1, 1, 1],
  0.3
)
// // 创建Object3DLayer图层
var object3Dlayer = new AMap.Object3DLayer()
map.add(object3Dlayer)

// 添加控制器
AMap.plugin(['AMap.ControlBar'], function () {
  // 添加 3D 罗盘控制
  map.addControl(new AMap.ControlBar())
})

// 设置边界
var prism = []
var meshLine = []

function drawBounds() {
  $.getJSON('map.json', function (resjson) {
    var boundobj = []
    for (var i = 0, l = resjson[0].length; i < l; i++) {
      //生成行政区划polygon
      var bound = new AMap.LngLat(resjson[0][i].P, resjson[0][i].O)
      boundobj.push(bound)
    }

    var height = 1000
    var color = 'rgba(100,255,255, 0.1)' //rgba
    prism = new AMap.Object3D.Prism({
      path: boundobj,
      height: height,
      color: color,
    })
    prism.transparent = true

    meshLine = new AMap.Object3D.MeshLine({
      path: boundobj,
      color: 'rgba(55,129,240, 0.9)',
      width: 5,
      height: 10,
    })
  })
}
drawBounds()