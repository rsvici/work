// 添加模型
map.plugin(['AMap.GltfLoader'], function () {
  console.log(1);
  var gltfObj = new AMap.GltfLoader()
  // 虹桥艺术中心
  var urlHqyszx = './gltf/hqyszx.gltf'
  var positionHqyszx = {
    position: new AMap.LngLat(121.404011, 31.211685),
    scale: 16,
    height: -13,
    scene: 0,
  }
  gltfObj.load(urlHqyszx, function (gltfCity) {
    gltfCity.setOption(positionHqyszx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 百盛优客
  var urlBsyk = './gltf/bsyk.gltf'
  var positionBsyk = {
    position: new AMap.LngLat(121.40326, 31.210697),
    scale: 70,
    height: 0,
    scene: 0,
  }
  gltfObj.load(urlBsyk, function (gltfCity) {
    gltfCity.setOption(positionBsyk)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(190)
    object3Dlayer.add(gltfCity)
  })

  // 汇金百货
  var urlHjbh = './gltf/hjbh.gltf'
  var positionHjbh = {
    position: new AMap.LngLat(121.405055, 31.211506),
    scale: 20,
    height: -20,
    scene: 0,
  }
  gltfObj.load(urlHjbh, function (gltfCity) {
    gltfCity.setOption(positionHjbh)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(10)
    object3Dlayer.add(gltfCity)
  })

  // 巴黎春天
  var urlBlct = './gltf/blct.gltf'
  var positionBlct = {
    position: new AMap.LngLat(121.402032, 31.21175),
    scale: 100,
    height: -35,
    scene: 0,
  }
  gltfObj.load(urlBlct, function (gltfCity) {
    gltfCity.setOption(positionBlct)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(10)
    object3Dlayer.add(gltfCity)
  })

  // 尚嘉中心
  var urlSjzx = './gltf/sjzx.gltf'
  var positionSjzx = {
    position: new AMap.LngLat(121.40706, 31.205765),
    scale: 55,
    height: 0,
    scene: 0,
  }
  gltfObj.load(urlSjzx, function (gltfCity) {
    gltfCity.setOption(positionSjzx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(195)
    object3Dlayer.add(gltfCity)
  })

  // 临空soho
  var urlLksoho = './gltf/lksoho.gltf'
  var positionLksoho = {
    position: new AMap.LngLat(121.352153, 31.221989),
    scale: 170,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlLksoho, function (gltfCity) {
    gltfCity.setOption(positionLksoho)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 金光绿庭广场
  var urlJglt = './gltf/jglt.gltf'
  var positionJglt = {
    position: new AMap.LngLat(121.40263, 31.208855),
    scale: 90,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlJglt, function (gltfCity) {
    gltfCity.setOption(positionJglt)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(13)
    object3Dlayer.add(gltfCity)
  })

  // 高岛屋
  var urlGdw = './gltf/gdw.gltf'
  var positionGdw = {
    position: new AMap.LngLat(121.403279, 31.197769),
    scale: 80,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlGdw, function (gltfCity) {
    gltfCity.setOption(positionGdw)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(18)
    object3Dlayer.add(gltfCity)
  })

  // 南丰城
  var urlNfc = './gltf/nfc.gltf'
  var positionNfc = {
    position: new AMap.LngLat(121.408059, 31.207468),
    scale: 95,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlNfc, function (gltfCity) {
    gltfCity.setOption(positionNfc)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(13)
    object3Dlayer.add(gltfCity)
  })

  // 华宁国际广场
  var urlHngj = './gltf/hngj.gltf'
  var positionHngj = {
    position: new AMap.LngLat(121.422457, 31.217483),
    scale: 30,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlHngj, function (gltfCity) {
    gltfCity.setOption(positionHngj)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(-2)
    object3Dlayer.add(gltfCity)
  })

  // 世贸商城
  var urlSmsc = './gltf/smsc.gltf'
  var positionSmsc = {
    position: new AMap.LngLat(121.400663, 31.201772),
    scale: 110,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlSmsc, function (gltfCity) {
    gltfCity.setOption(positionSmsc)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(-17)
    object3Dlayer.add(gltfCity)
  })

  // 环东华·智尚园
  var urlHdh = './gltf/hdh.gltf'
  var positionHdh = {
    position: new AMap.LngLat(121.418081, 31.203118),
    scale: 40,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlHdh, function (gltfCity) {
    gltfCity.setOption(positionHdh)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(21)
    object3Dlayer.add(gltfCity)
  })

  // 来福士广场
  var urlLfs = './gltf/lfs.gltf'
  var positionLfs = {
    position: new AMap.LngLat(121.41456, 31.216612),
    scale: 88,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlLfs, function (gltfCity) {
    gltfCity.setOption(positionLfs)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(13)
    object3Dlayer.add(gltfCity)
  })

  // 上海国际舞蹈中心
  var urlGjwdzx = './gltf/gjwdzx.gltf'
  var positionGjwdzx = {
    position: new AMap.LngLat(121.394363, 31.19928),
    scale: 90,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlGjwdzx, function (gltfCity) {
    gltfCity.setOption(positionGjwdzx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(160)
    object3Dlayer.add(gltfCity)
  })

  // 刘海粟美术馆
  var urlLhs = './gltf/lhs.gltf'
  var positionLhs = {
    position: new AMap.LngLat(121.419218, 31.209644),
    scale: 38,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlLhs, function (gltfCity) {
    gltfCity.setOption(positionLhs)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(160)
    object3Dlayer.add(gltfCity)
  })

  // 国际体操中心
  var urlGjtczx = './gltf/gjtczx.gltf'
  var positionGjtczx = {
    position: new AMap.LngLat(121.413935, 31.213508),
    scale: 90,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlGjtczx, function (gltfCity) {
    gltfCity.setOption(positionGjtczx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  // 上生新所
  var urlssxs = './gltf/ssxs.gltf'
  var positionssxs = {
    position: new AMap.LngLat(121.427945, 31.208519),
    scale: 110,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlssxs, function (gltfCity) {
    gltfCity.setOption(positionssxs)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


})