(function(e) {
    e.fn.extend({
        v3dControl: function(t) {
            new e.v3dControl(this, t);
            return
        }
    });
    e.v3dControl = function(dom, obj) {
        var tWidth = typeof(obj.width) == "undefined" ? dom.width() : obj.width;
        var tHeight = typeof(obj.height) == "undefined" ? dom.height() : obj.height;
        var imgLength = typeof(obj.imgLength) == "undefined" ? 0 : obj.imgLength;
        var imgPath = typeof(obj.imgPath) == "undefined" ? "img/" : obj.imgPath;
        var imgType = typeof(obj.imgType) == "undefined" ? ".png" : obj.imgType;
        var isAuto = typeof(obj.isAuto) == "undefined" ? false : obj.isAuto;
        var autoTime;
        var canvasapp = canvasApp();
        var tImgObj = [];
        var tIndex = 0;
        var imgWidth, imgHeight = 0;
        var canvas;
        var content;
        var imgUrlSrc = [];
        if (imgLength == 0) {
            alert("图片数量不能为空");
            return
        }

        function canvasSupport() {
            return !!document.createElement('canvas').getContext
        }

        function canvasApp() {
            if (!canvasSupport()) {
                return false
            }
            return true
        }

        function _initData() {
            dom.css({
                "cursor": "move"
            });
            dom.append("<img id='loadding' src='img/loadding.gif' style='position:absolute;width:32px;left:50%;top:50%;margin:-16px 0px 0px -16px;z-index:100;zoom:1'/>");
            if (canvasapp) {
                dom.append("<img id='imgStart' src='" + imgPath + 1 + imgType + "' style='position: absolute;left:50%;top:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%);transform: translate(-50%,-50%);'/>");
                imgWidth = 919;
                imgHeight = 460;
                dom.append("<canvas id=\"canvas\" width='" + tWidth + "' height='" + tHeight + "' style='position: absolute;left:50%;top:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%);transform: translate(-50%,-50%);'></canvas>");
                canvas = document.getElementById("canvas");
                content = canvas.getContext("2d");
                for (var i = 1; i <= imgLength; i++) {
                    var img2 = new Image();
                    img2.src = imgPath + i + imgType;
                    tImgObj.push(img2);
                    imgUrlSrc.push(img2.src);
                }
                $("#imgStart").hide();
            } else {
                for (var i = 1; i <= imgLength; i++) {
                    dom.append("<img src='" + imgPath + i + imgType + "' style='display: none;' class='v3dcover'/>");
                    tImgObj.push(".v3dcover:eq(" + i + ")");
                    imgUrlSrc.push(imgPath + i + imgType);
                }
            }

            _initHScroll();
            ImageLoadEnd(imgUrlSrc[tIndex], function() {
                imgUrlSrc = [];
                $("#loadding").fadeOut("fast");
                _move();
                _autoPlay();
            })
        }

        function ImageLoadEnd(url, callback) {
            var img = new Image(); //创建一个Image对象，实现图片的预下载
            img.onload = function() { //图片下载完毕时异步调用callback函
                callback(); //将回调函数的this替换为Image对象
            };
            img.src = url;
        }

        function _autoPlay() {
            if (isAuto) {
                setTimeout(function() {
                        autoTime = setInterval(function() {
                                _add()
                            },
                            150)
                    },
                    100)
            } else {}
        }

        function _jian() {
            tIndex++;
            if (tIndex > tImgObj.length - 1) {
                tIndex = 0
            }
            _move()
        }

        function _add() {
            tIndex--;
            if (tIndex < 0) {
                tIndex = tImgObj.length - 1
            }
            _move()
        }

        function _move() {
            if (canvasapp) {
                content.clearRect(0, 0, tWidth, tHeight);
                content.drawImage(tImgObj[tIndex], 0, (tHeight - tWidth / imgWidth * imgHeight) / 2, tWidth, tWidth / imgWidth * imgHeight);
            } else {
                dom.css({
                    "background": "url('" + $(tImgObj[tIndex]).attr("src") + "') no-repeat center center"
                })
            }
        }

        function _initHScroll() {
            var nHStartX;
            var isHMove = false;

            function _initHMoveStart(e) {
                if (e.type == "touchstart") {
                    nHStartX = event.touches[0].pageX
                } else {
                    nHStartX = e.x || e.pageX
                }
                isHMove = true
            }

            function _initHMoveMove(e) {
                e.preventDefault();
                if (isHMove) {
                    var moveP;
                    if (e.type == "touchmove") {
                        moveP = event.touches[0].pageX
                    } else {
                        moveP = e.x || e.pageX
                    }
                    var hm = nHStartX - moveP;
                    var m = $(window).width() > 1100 ? hm % 2 == 0 : hm % 1 == 0;
                    if (hm < 0 && m) {
                        if (isAuto) {
                            clearInterval(autoTime)
                        }
                        _jian()
                    }
                    if (hm > 0 && m) {
                        if (isAuto) {
                            clearInterval(autoTime)
                        }
                        _add()
                    }
                    nHStartX = moveP
                }
            }

            function _initHMoveEnd(e) {
                _autoPlay();
                isHMove = false
            }

            function _init() {
                dom.on("mousedown touchstart", _initHMoveStart);
                dom.on("mousemove touchmove", _initHMoveMove);
                dom.on("mouseup touchend", _initHMoveEnd)
            }

            _init()
        }

        _initData()
    }
})(jQuery)