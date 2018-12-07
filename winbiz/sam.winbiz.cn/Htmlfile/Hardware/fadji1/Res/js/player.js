
var PlayerHelp = {
    mouseDownPos: null,
    isKeyDown: false,
    downFun: function (ev) {
        ev = ev || window.event;
        if (ev.button != 2) {

            PlayerHelp.mouseDownPos = PlayerHelp.mousePosition(ev);
            PlayerHelp.isKeyDown = true;

            Player.stopPlayAct();
        }

    },
    mousePosition: function (ev) {
        if (ev.pageX || ev.pageY) {
            return { x: ev.pageX - $("#imgContainer").position().left, y: ev.pageY - $("#imgContainer").position().top };
        }
        return { x: ev.clientX - $("#imgContainer").offset().left, y: ev.clientY - $("#imgContainer").offset().top };
    }
}


var Player = {
    player_t: 0,
    initValue: 0,
    timeSp: 0,
    resPath: "Res",
    step: 0,
    playCount: 59,
    imageIndex: 0,
    cleartime: null,
    isStopPlay: false,
    muTime: null,
    direction: null,
    isShowBig: true,
    imgExt: "jpg",
    isSpin: true,
    playSpeed: 35,
    init:function(){
        Player.playCount = player_config.playCount;
        Player.imgExt = player_config.imgExt;
        Player.playSpeed = player_config.speed;
        Player.isShowBig = player_config.isShowBig;
        $("#watermask_").attr("src", player_config.watermask);
        Player.loadimg(0, true);
    },
    loadimg: function (param, isfirst) {
        if (param > Player.playCount) {
            NProgress.done();
            return;
        }

        var imgload = new Image();

            imgload.src = Player.resPath + "/" + (Player.isShowBig ? "Big" : "Small") + "/" + (isfirst ? (Player.playCount - param) : (param)) + "." + Player.imgExt;

        if (imgload.complete) {
            isfirst = !isfirst;
            param++;
            Player.loadimg(param, isfirst);

        } else {
            imgload.onload = function () {
                isfirst = !isfirst;
                param++;
                Player.loadimg(param, isfirst);
            }

            imgload.onerror = function () {
                isfirst = !isfirst;
                param++;
                Player.loadimg(param, isfirst);
            }
        }
    },
    getPlayImg:function(){

        var imgsrc = "";

        if (Player.isShowBig) {
            imgsrc = Player.resPath + "/Big/" + Player.imageIndex + "." + Player.imgExt;
        } else {
            imgsrc = Player.resPath + "/Small/" + Player.imageIndex + "." + Player.imgExt;;
        }

        return imgsrc;

    },
    easeOut: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    startRightPlay: function (timeSpan) {

        if (Player.imageIndex <= 0) {
            Player.imageIndex = Player.playCount;
        } else {
            Player.imageIndex--;
        }

        //var loadImg = new Image();
        //loadImg.src = Player.getPlayImg();
        //loadImg.onload = function () {
            $("#imageFullScreen").attr("src", Player.getPlayImg());

            var span = Player.easeOut(Player.player_t++, Player.initValue, Player.timeSp, Player.step)

            if (Player.player_t > Player.step) {
                return;
            }
            Player.cleartime = setTimeout("Player.startRightPlay(" + span + ")", span);

        //}

        //loadImg.onerror = function () {
        //    $("#imageFullScreen").attr("src", Player.getPlayImg());

        //    var span = Player.easeOut(Player.player_t++, Player.initValue, Player.timeSp, Player.step)

        //    if (Player.player_t > Player.step) {
        //        return;
        //    }
        //    Player.cleartime = setTimeout("Player.startRightPlay(" + span + ")", span);

        //}

    },
    startLeftPlay: function (timeSpan) {
        if (Player.imageIndex >= Player.playCount) {
            Player.imageIndex = 0;
        } else {
            Player.imageIndex++;
        }

        //var loadImg = new Image();
        //loadImg.src = Player.getPlayImg();
        //loadImg.onload = function () {

            $("#imageFullScreen").attr("src", Player.getPlayImg());
            var span = Player.easeOut(Player.player_t++, Player.initValue, Player.timeSp, Player.step)
            Player.player_t++;
            if (Player.player_t > Player.step) {
                return;
            }
            Player.cleartime = setTimeout("Player.startLeftPlay(" + span + ")", span);
        //}

        //loadImg.onerror = function () {

        //    $("#imageFullScreen").attr("src", Player.getPlayImg());
        //    var span = Player.easeOut(Player.player_t++, Player.initValue, Player.timeSp, Player.step)
        //    Player.player_t++;
        //    if (Player.player_t > Player.step) {
        //        return;
        //    }
        //    Player.cleartime = setTimeout("Player.startLeftPlay(" + span + ")", span);
        //}

    },
    playActLeft: function () {


        var image = new Image();
        image.src = Player.getPlayImg();

        image.onload = function () {
            clearTimeout(Player.cleartime);
            $("#imageFullScreen").attr("src", Player.getPlayImg());
            if (Player.imageIndex >= Player.playCount) {
                Player.imageIndex = 0;
            } else {
                Player.imageIndex++;
            }
            if (Player.isStopPlay == false) {
                Player.cleartime = setTimeout("Player.playActLeft()", Player.playSpeed);
            }
        }

        image.onerror = function () {
            clearTimeout(Player.cleartime);
            if (Player.imageIndex >= Player.playCount) {
                Player.imageIndex = 0;
            } else {
                Player.imageIndex++;
            }
            if (Player.isStopPlay == false) {
                Player.cleartime = setTimeout("Player.playActLeft()", Player.playSpeed);
            }
        }

    },
    playActRight: function () {


        var image = new Image();
        image.src = Player.getPlayImg();

        image.onload = function () {
            //clearTimeout(Player.cleartime);
            $("#imageFullScreen").attr("src", Player.getPlayImg());
            if (Player.imageIndex <= 0) {
                Player.imageIndex = Player.playCount;
            } else {
                Player.imageIndex--;
            }
            if (Player.isStopPlay == false) {
                Player.cleartime = setTimeout("Player.playActRight()", Player.playSpeed);
            }
        }
        image.onerror = function () {
            //clearTimeout(Player.cleartime);
            if (Player.imageIndex <= 0) {
                Player.imageIndex = Player.playCount;
            } else {
                Player.imageIndex--;
            }
            if (Player.isStopPlay == false) {
                Player.cleartime = setTimeout("Player.playActRight()", Player.playSpeed);
            }
        }

    }
    ,
    stopPlayAct: function () {

        Player.isStopPlay = true;
        clearTimeout(Player.cleartime);
        $(".Playbtn").removeClass("active");
    },
    startPlayAct: function () {
        Player.isStopPlay = false;
        Player.playActLeft();
    },
    movePlay: function (e) {
        e = e || window.event;

        var pos = PlayerHelp.mousePosition(e);

        if (PlayerHelp.isKeyDown) {
            
            e = e || window.event;
            if (pos.x > PlayerHelp.mouseDownPos.x + 10) {


                var speedValue = Math.floor(pos.x - PlayerHelp.mouseDownPos.x) / 10;
                if (speedValue > 10) {
                    speedValue = 10;
                }
                for (var i = 0; i < parseInt(speedValue) ; i++) {
                    if (Player.imageIndex <= 0) {
                        Player.imageIndex = Player.playCount;
                    } else {
                        Player.imageIndex--;
                    }

                    Player.direction = true;
                    Player.muTime = (new Date()).getTime();
                    $("#imageFullScreen").attr("src", Player.getPlayImg());
                }
                PlayerHelp.mouseDownPos.x = pos.x;

            }
            if (pos.x < PlayerHelp.mouseDownPos.x - 10) {


                var speedValue = Math.floor(PlayerHelp.mouseDownPos.x - pos.x) / 10;
                for (var i = 0; i < parseInt(speedValue) ; i++) {
                    if (Player.imageIndex >= Player.playCount) {
                        Player.imageIndex = 0;
                    } else {
                        Player.imageIndex++;
                    }
                    Player.direction = false;
                    Player.muTime = (new Date()).getTime();
                    $("#imageFullScreen").attr("src", Player.getPlayImg());
                }
                PlayerHelp.mouseDownPos.x = pos.x;
            }
        }
    }
    ,
    mouseUpProcess: function () {

        Player.player_t = 0;
        PlayerHelp.isKeyDown = false;

        var time = (new Date()).getTime() - Player.muTime;
        var frameSpeed = Player.playCount / time > 20 ? 19 : (Player.playCount / time);
        Player.initValue = 20 - frameSpeed;

        Player.timeSp = 100 - Player.initValue;
        Player.step = 0;

        if (Math.abs(time) < 100 && Player.muTime != 0) {

            Player.step = Player.timeSp / 3;
            if (Player.direction) {

                Player.startRightPlay(Player.easeOut(0, Player.initValue, Player.timeSp, Player.step));

            }
            else {

                Player.startLeftPlay(Player.easeOut(0, Player.initValue, Player.timeSp, Player.step));
            }
        }



    }

}