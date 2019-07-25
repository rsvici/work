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

  // 金虹桥国际中心
  var jgltgcMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40303, 31.208895],
    height: 1500,
  })
  jgltgcMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>金虹桥国际中心</div>",
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
    content: "<div class='info1'>环东华·智尚源</div>",
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

  // 上海银星皇冠假日酒店
  var yxhgMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.429514, 31.202803],
    height: 950,
  })
  yxhgMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>银星皇冠假日酒店</div>",
  })

  // 中山公园
  var zsgyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.418388, 31.221646],
    height: 550,
  })
  zsgyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>中山公园</div>",
  })

  // 缤谷广场
  var bggcMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.387616 , 31.214272],
    height: 550,
  })
  bggcMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>缤谷广场</div>",
  })



  // 自定义事件
  // 虹桥艺术中心
  function showInfoMxinhongqiao() {
    window.location.href =
      `../#/shopinfo?shopItemId=3`
  }
  hqyszxMarker.on('click', showInfoMxinhongqiao)

  // 百盛优客
  function showInfoMbaskMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=10`
  }
  baskMarker.on('click', showInfoMbaskMarker)

  // 汇金百货
  function showInfoMhjbhMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=13`
  }
  hjbhMarker.on('click', showInfoMhjbhMarker)

  // 巴黎春天
  function showInfoMblctMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=16`
  }
  blctMarker.on('click', showInfoMblctMarker)

  // 尚嘉中心
  function showInfoMsjzxMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=11`
  }
  sjzxMarker.on('click', showInfoMsjzxMarker)

  // 临空soho
  function showInfoMlksohoMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=17`
  }
  lksohoMarker.on('click', showInfoMlksohoMarker)

  // 金光绿庭广场
  function showInfoMjgltgcMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=12`
  }
  jgltgcMarker.on('click', showInfoMjgltgcMarker)

  // 高岛屋
  function showInfoMgdwMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=18`
  }
  gdwMarker.on('click', showInfoMgdwMarker)

  // 南丰城
  function showInfoMnfcMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=9`
  }
  nfcMarker.on('click', showInfoMnfcMarker)

  // 华宁国际广场
  function showInfoMhngjMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=4`
  }
  hngjMarker.on('click', showInfoMhngjMarker)

  // 上海世贸商城
  function showInfoMsmscMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=14`
  }
  smscMarker.on('click', showInfoMsmscMarker)

  // 环东华·智尚园
  function showInfoMhdhMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=6`
  }
  hdhMarker.on('click', showInfoMhdhMarker)

  // 来福士广场
  function showInfoMlfsMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=15`
  }
  lfsMarker.on('click', showInfoMlfsMarker)

  // 上海国际舞蹈中心
  function showInfoMgjwdzxMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=8`
  }
  gjwdzxMarker.on('click', showInfoMgjwdzxMarker)

  // 刘海粟美术馆
  function showInfoMlhsMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=2`
  }
  lhsMarker.on('click', showInfoMlhsMarker)


  // 上海国际体操中心
  function showInfoMgjtczxMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=7`
  }
  gjtczxMarker.on('click', showInfoMgjtczxMarker)

  // 上生新所
  function showInfoMgssxsMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=5`
  }
  ssxsMarker.on('click', showInfoMgssxsMarker)

  // 中山公园
  function showInfoMgzsgyMarker() {
    return;
    window.location.href =
      `../#/shopinfo?shopId=2&businessName=zhongshan`
  }
  zsgyMarker.on('click', showInfoMgzsgyMarker)

  // 缤谷广场
  function showInfoMgbggcMarker() {
    return;
    window.location.href =
      `../#/shopinfo?shopId=2&businessName=zhongshan`
  }
  bggcMarker.on('click', showInfoMgbggcMarker)
}