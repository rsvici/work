// 标识点
if (getQueryString('endsouth')) {

} else {
  // 虹桥艺术中心
  var hqyszxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40396, 31.211692],
    height: 290,
  })
  hqyszxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>虹桥艺术中心</div>",
  })

  // 百盛优客
  var baskMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40326, 31.210697],
    height: 610,
  })
  baskMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>百盛优客城市广场</div>",
  })

  // 汇金百货
  var hjbhMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.405055, 31.211506],
    height: 340,
  })
  hjbhMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>汇金百货</div>",
  })

  // 巴黎春天
  var blctMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.402042, 31.21171],
    height: 360,
  })
  blctMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>巴黎春天</div>",
  })

  // 尚嘉中心
  var sjzxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40682, 31.205660],
    height: 1200,
  })
  sjzxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>尚嘉中心</div>",
  })

  // 临空soho
  var lksohoMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.352153, 31.221989],
    height: 500,
  })
  lksohoMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>凌空SOHO</div>",
  })

  // 金光绿庭广场
  var jgltgcMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40303, 31.208895],
    height: 1500,
  })
  jgltgcMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>金光绿庭广场</div>",
  })


  // 高岛屋
  var gdwMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.403279, 31.197769],
    height: 1300,
  })
  gdwMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-10, 31),
    content: "<div class='info1'>高岛屋</div>",
  })

  // 南丰城
  var nfcMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.408059, 31.207468],
    height: 1000,
  })
  nfcMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-10, 31),
    content: "<div class='info1'>南丰城</div>",
  })

  // 华宁国际广场
  var hngjMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.422457, 31.217483],
    height: 1000,
  })
  hngjMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>华宁国际广场</div>",
  })

  // 上海世贸商城
  var smscMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.400663, 31.201772],
    height: 700,
  })
  smscMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>上海世贸商城</div>",
  })

  // 环东华·智尚园
  var hdhMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.418001, 31.203068],
    height: 300,
  })
  hdhMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>环东华·智尚园</div>",
  })

  // 来福士广场
  var lfsMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.41456, 31.216612],
    height: 600,
  })
  lfsMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-25, 31),
    content: "<div class='info1'>来福士广场</div>",
  })

  // 上海国际舞蹈中心
  var gjwdzxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.394363, 31.19928],
    height: 450,
  })
  gjwdzxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>上海国际舞蹈中心</div>",
  })

  // 刘海粟美术馆
  var lhsMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.419218, 31.209644],
    height: 350,
  })
  lhsMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>刘海粟美术馆</div>",
  })

  // 上海国际体操中心
  var gjtczxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.413935, 31.213508],
    height: 550,
  })
  gjtczxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>上海国际体操中心</div>",
  })

  // 上生新所
  var ssxsMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.427945, 31.208519],
    height: 550,
  })
  ssxsMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>上生新所</div>",
  })
  // 自定义事件
  // 虹桥艺术中心
  function showInfoMxinhongqiao() {
    window.location.href =
      `../#/shopinfo?shopId=0&businessName=xinhongqiao`
  }
  hqyszxMarker.on('click', showInfoMxinhongqiao)

  // 百盛优客
  function showInfoMbaskMarker() {
    window.location.href =
      `../#/shopinfo?shopId=2&businessName=xinhongqiao`
  }
  baskMarker.on('click', showInfoMbaskMarker)

  // 汇金百货
  function showInfoMhjbhMarker() {
    window.location.href =
      `../#/shopinfo?shopId=5&businessName=xinhongqiao`
  }
  hjbhMarker.on('click', showInfoMhjbhMarker)

  // 巴黎春天
  function showInfoMblctMarker() {
    window.location.href =
      `../#/shopinfo?shopId=8&businessName=xinhongqiao`
  }
  blctMarker.on('click', showInfoMblctMarker)

  // 尚嘉中心
  function showInfoMsjzxMarker() {
    window.location.href =
      `../#/shopinfo?shopId=3&businessName=xinhongqiao`
  }
  sjzxMarker.on('click', showInfoMsjzxMarker)

  // 临空soho
  function showInfoMlksohoMarker() {
    window.location.href =
      `../#/shopinfo?shopId=0&businessName=linkong`
  }
  lksohoMarker.on('click', showInfoMlksohoMarker)

  // 金光绿庭广场
  function showInfoMjgltgcMarker() {
    window.location.href =
      `../#/shopinfo?shopId=4&businessName=xinhongqiao`
  }
  jgltgcMarker.on('click', showInfoMjgltgcMarker)

  // 高岛屋
  function showInfoMgdwMarker() {
    window.location.href =
      `../#/shopinfo?shopId=5&businessName=zhongshan`
  }
  gdwMarker.on('click', showInfoMgdwMarker)

  // 南丰城
  function showInfoMnfcMarker() {
    window.location.href =
      `../#/shopinfo?shopId=1&businessName=xinhongqiao`
  }
  nfcMarker.on('click', showInfoMnfcMarker)

  // 华宁国际广场
  function showInfoMhngjMarker() {
    window.location.href =
      `../#/shopinfo?shopId=2&businessName=zhongshan`
  }
  hngjMarker.on('click', showInfoMhngjMarker)

  // 上海世贸商城
  function showInfoMsmscMarker() {
    window.location.href =
      `../#/shopinfo?shopId=6&businessName=xinhongqiao`
  }
  smscMarker.on('click', showInfoMsmscMarker)

  // 环东华·智尚园
  function showInfoMhdhMarker() {
    window.location.href =
      `../#/shopinfo?shopId=4&businessName=zhongshan`
  }
  hdhMarker.on('click', showInfoMhdhMarker)

  // 来福士广场
  function showInfoMlfsMarker() {
    window.location.href =
      `../#/shopinfo?shopId=7&businessName=xinhongqiao`
  }
  lfsMarker.on('click', showInfoMlfsMarker)

  // 上海国际舞蹈中心
  function showInfoMgjwdzxMarker() {
    window.location.href =
      `../#/shopinfo?shopId=0&businessName=zhongshan`
  }
  gjwdzxMarker.on('click', showInfoMgjwdzxMarker)

  // 刘海粟美术馆
  function showInfoMlhsMarker() {
    window.location.href =
      `../#/shopinfo?shopId=1&businessName=zhongshan`
  }
  lhsMarker.on('click', showInfoMlhsMarker)


  // 上海国际体操中心
  function showInfoMgjtczxMarker() {
    window.location.href =
      `../#/shopinfo?shopId=6&businessName=zhongshan`
  }
  gjtczxMarker.on('click', showInfoMgjtczxMarker)

  // 上生新所
  function showInfoMgssxsMarker() {
    window.location.href =
      `../#/shopinfo?shopId=3&businessName=zhongshan`
  }
  ssxsMarker.on('click', showInfoMgssxsMarker)
}