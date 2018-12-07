angular.module('myApp', ['ionic'])
    // 设置域名
    .config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');
    })
    .controller('myCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', '$interval', '$ionicPopup', '$timeout', '$stateParams', function ($scope, $state, $http, $httpParamSerializer, $interval, $ionicPopup, $timeout, $stateParams) {

        // 初始化
        $scope.mark = 0; //分数
        $scope.showWeb = 0; //开始页面
        $scope.time = 30; //开始时间
        $scope.isNoChoiceQight = false; //防止多次点击正确答案
        $scope.isShowSubmit = false;
        $scope.isShowSubmitfalse = false;

        $scope.picJsonObj = [{
                url0: './imgs/gamepic/1.jpg',
                url1: './imgs/gamepic/2.jpg',
                css: {
                    top: '10vh',
                    right: '69vw',
                    width: '18vw',
                    height: '11vh',
                }
            }, {
                url0: './imgs/gamepic/3.jpg',
                url1: './imgs/gamepic/4.jpg',
                css: {
                    top: '14vh',
                    right: '13vw',
                    width: '12vw',
                    height: '12vw',
                }
            }, {
                url0: './imgs/gamepic/5.jpg',
                url1: './imgs/gamepic/6.jpg',
                css: {
                    top: '18vh',
                    right: '36vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/7.jpg',
                url1: './imgs/gamepic/8.jpg',
                css: {
                    top: '35vh',
                    right: '18vw',
                    width: '10vw',
                    height: '10vw',
                }
            }, {
                url0: './imgs/gamepic/9.jpg',
                url1: './imgs/gamepic/10.jpg',
                css: {
                    top: '18vh',
                    right: '51vw',
                    width: '7vw',
                    height: '7vw',
                }
            }, {
                url0: './imgs/gamepic/11.jpg',
                url1: './imgs/gamepic/12.jpg',
                css: {
                    top: '8vh',
                    right: '24vw',
                    width: '14vw',
                    height: '14vw',
                }
            }, {
                url0: './imgs/gamepic/15.jpg',
                url1: './imgs/gamepic/16.jpg',
                css: {
                    top: '24vh',
                    right: '67vw',
                    width: '25vw',
                    height: '25vw',
                }
            }, {
                url0: './imgs/gamepic/17.jpg',
                url1: './imgs/gamepic/18.jpg',
                css: {
                    top: '15vh',
                    right: '39vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/19.jpg',
                url1: './imgs/gamepic/20.jpg',
                css: {
                    top: '13vh',
                    right: '20vw',
                    width: '29vw',
                    height: '29vw',
                }
            }, {
                url0: './imgs/gamepic/21.jpg',
                url1: './imgs/gamepic/22.jpg',
                css: {
                    top: '16.5vh',
                    right: '69vw',
                    width: '16vw',
                    height: '16vw',
                }
            }, {
                url0: './imgs/gamepic/23.jpg',
                url1: './imgs/gamepic/24.jpg',
                css: {
                    top: '16.5vh',
                    right: '68vw',
                    width: '16vw',
                    height: '16vw',
                }
            }, {
                url0: './imgs/gamepic/25.jpg',
                url1: './imgs/gamepic/26.jpg',
                css: {
                    top: '16vh',
                    right: '75vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/27.jpg',
                url1: './imgs/gamepic/28.jpg',
                css: {
                    top: '22vh',
                    right: '52vw',
                    width: '10vw',
                    height: '10vw',
                }
            }, {
                url0: './imgs/gamepic/29.jpg',
                url1: './imgs/gamepic/30.jpg',
                css: {
                    top: '26vh',
                    right: '27vw',
                    width: '11vw',
                    height: '11vw',
                }
            }, {
                url0: './imgs/gamepic/31.jpg',
                url1: './imgs/gamepic/32.jpg',
                css: {
                    top: '15vh',
                    right: '33vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/33.jpg',
                url1: './imgs/gamepic/34.jpg',
                css: {
                    top: '22vh',
                    right: '18vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/35.jpg',
                url1: './imgs/gamepic/36.jpg',
                css: {
                    top: '23vh',
                    right: '78vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/37.jpg',
                url1: './imgs/gamepic/38.jpg',
                css: {
                    top: '18.6vh',
                    right: '69vw',
                    width: '12vw',
                    height: '12vw',
                }
            }, {
                url0: './imgs/gamepic/39.jpg',
                url1: './imgs/gamepic/40.jpg',
                css: {
                    top: '20vh',
                    right: '37vw',
                    width: '10vw',
                    height: '10vw',
                }
            }, {
                url0: './imgs/gamepic/41.jpg',
                url1: './imgs/gamepic/42.jpg',
                css: {
                    top: '17vh',
                    right: '50vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/43.jpg',
                url1: './imgs/gamepic/44.jpg',
                css: {
                    top: '4vh',
                    right: '18vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/45.jpg',
                url1: './imgs/gamepic/46.jpg',
                css: {
                    top: '16vh',
                    right: '2vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/47.jpg',
                url1: './imgs/gamepic/48.jpg',
                css: {
                    top: '15vh',
                    right: '10vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/49.jpg',
                url1: './imgs/gamepic/50.jpg',
                css: {
                    top: '11vh',
                    right: '14vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/51.jpg',
                url1: './imgs/gamepic/52.jpg',
                css: {
                    top: '20vh',
                    right: '20vw',
                    width: '59vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/53.jpg',
                url1: './imgs/gamepic/54.jpg',
                css: {
                    top: '15vh',
                    right: '17vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/55.jpg',
                url1: './imgs/gamepic/56.jpg',
                css: {
                    top: '13vh',
                    right: '17vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/57.jpg',
                url1: './imgs/gamepic/58.jpg',
                css: {
                    top: '11vh',
                    right: '68vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/59.jpg',
                url1: './imgs/gamepic/60.jpg',
                css: {
                    top: '10vh',
                    right: '41vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/63.jpg',
                url1: './imgs/gamepic/64.jpg',
                css: {
                    top: '9vh',
                    right: '28vw',
                    width: '44vw',
                    height: '45vw',
                }
            }, {
                url0: './imgs/gamepic/65.jpg',
                url1: './imgs/gamepic/66.jpg',
                css: {
                    top: '22vh',
                    right: '32vw',
                    width: '15vw',
                    height: '15vw',
                }
            }, {
                url0: './imgs/gamepic/67.jpg',
                url1: './imgs/gamepic/68.jpg',
                css: {
                    top: '14vh',
                    right: '43vw',
                    width: '15vw',
                    height: '15vw',
                }
            }, {
                url0: './imgs/gamepic/69.jpg',
                url1: './imgs/gamepic/70.jpg',
                css: {
                    top: '14vh',
                    right: '38vw',
                    width: '15vw',
                    height: '15vw',
                }
            }, {
                url0: './imgs/gamepic/77.jpg',
                url1: './imgs/gamepic/78.jpg',
                css: {
                    top: '23vh',
                    right: '51vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/79.jpg',
                url1: './imgs/gamepic/80.jpg',
                css: {
                    top: '12vh',
                    right: '16vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/83.jpg',
                url1: './imgs/gamepic/84.jpg',
                css: {
                    top: '18vh',
                    right: '43vw',
                    width: '16vw',
                    height: '16vw',
                }
            }, {
                url0: './imgs/gamepic/85.jpg',
                url1: './imgs/gamepic/86.jpg',
                css: {
                    top: '15vh',
                    right: '25vw',
                    width: '16vw',
                    height: '16vw',
                }
            }, {
                url0: './imgs/gamepic/87.jpg',
                url1: './imgs/gamepic/88.jpg',
                css: {
                    top: '11vh',
                    right: '77vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/89.jpg',
                url1: './imgs/gamepic/90.jpg',
                css: {
                    top: '20vh',
                    right: '28vw',
                    width: '15vw',
                    height: '15vw',
                }
            }, {
                url0: './imgs/gamepic/91.jpg',
                url1: './imgs/gamepic/92.jpg',
                css: {
                    top: '28vh',
                    right: '60vw',
                    width: '20vw',
                    height: '22vw',
                }
            },
            {
                url0: './imgs/gamepic/95.jpg',
                url1: './imgs/gamepic/96.jpg',
                css: {
                    top: '6vh',
                    right: '35vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/97.jpg',
                url1: './imgs/gamepic/98.jpg',
                css: {
                    top: '21vh',
                    right: '25vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/99.jpg',
                url1: './imgs/gamepic/100.jpg',
                css: {
                    top: '11vh',
                    right: '8vw',
                    width: '24vw',
                    height: '26vw',
                }
            }, {
                url0: './imgs/gamepic/107.jpg',
                url1: './imgs/gamepic/108.jpg',
                css: {
                    top: '18vh',
                    right: '42vw',
                    width: '20vw',
                    height: '20vw',
                }
            },
            {
                url0: './imgs/gamepic/111.jpg',
                url1: './imgs/gamepic/112.jpg',
                css: {
                    top: '12vh',
                    right: '55vw',
                    width: '42vw',
                    height: '22vw',
                }
            }, {
                url0: './imgs/gamepic/113.jpg',
                url1: './imgs/gamepic/114.jpg',
                css: {
                    top: '12vh',
                    right: '14vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/117.jpg',
                url1: './imgs/gamepic/118.jpg',
                css: {
                    top: '12vh',
                    right: '35vw',
                    width: '20vw',
                    height: '20vw',
                }
            }, {
                url0: './imgs/gamepic/119.jpg',
                url1: './imgs/gamepic/120.jpg',
                css: {
                    top: '3vh',
                    right: '8vw',
                    width: '25vw',
                    height: '25vw',
                }
            }
        ];


        var randomArray = [];
        $scope.sourtRandom = function (minNum) {
            var objArr = {};
            for (var i = 0; i < 6; i++) {
                var randomnum = Math.floor(Math.random() * 6) + 6 * minNum;
                if (!objArr[randomnum]) {
                    objArr[randomnum] = true;
                    randomArray.push(randomnum);
                } else {
                    i--;
                }
            }
            console.log(randomArray);
        }

        $scope.sourtRandomObj = function (minNum) {
            var bigobjArr = {};
            for (var i = 0; i < 8; i++) {
                var randomnum = Math.floor(Math.random() * 8);
                if (!bigobjArr[randomnum]) {
                    bigobjArr[randomnum] = true;
                    $scope.sourtRandom(randomnum);
                } else {
                    i--;
                }
            }
        }
        $scope.sourtRandomObj();



        // 初始化选择第一题
        // $scope.picJson = $scope.picJsonObj[randomArray[0]];
        // $('.game .right').css($scope.picJsonObj[randomArray[0]].css);
        $scope.touchHoldFun=function(imgUrl){
            if(imgUrl){
                console.log(imgUrl);
                switch(imgUrl){
                    case 'btn_s1_1':
                    $('.index .start img').attr("src",'./imgs/'+imgUrl+'.png')
                    break;

                    case 'start_1':
                    $('.detail .start img').attr("src",'./imgs/'+imgUrl+'.png')
                    break;

                    case 'btn_end_1':
                    $('.balance .submit img').attr("src",'./imgs/'+imgUrl+'.png')
                    break;

                    case 'btn_again_1':
                    $('.balance .start img').attr("src",'./imgs/'+imgUrl+'.png')
                    break;

                    case 'btn_again_1':
                    $('.balance .start img').attr("src",'./imgs/'+imgUrl+'.png')
                    break;

                    case 'btn_back_1':
                    $('.info .start img').attr("src",'./imgs/'+imgUrl+'.png')
                    break;
                }
            }
        }

        // 选择页面
        $scope.choiceWeb = function (showWebNum,imgUrl) {
            $('.index .start img').attr("src",'./imgs/btn_s1.png')
            $('.detail .start img').attr("src",'./imgs/start.png')
            $('.balance .submit img').attr("src",'./imgs/btn_end.png')
            $('.balance .start img').attr("src",'./imgs/btn_again.png')
            $('.info .start img').attr("src",'./imgs/btn_back.png')
            // if(imgUrl){
            //     console.log(imgUrl);
            //     switch(imgUrl){
            //         case 'btn_s1_1':
            //         $('.index .start img').attr("src",'./imgs/'+imgUrl+'.png')
            //         break;

            //         case 'start_1':
            //         $('.detail .start img').attr("src",'./imgs/'+imgUrl+'.png')
            //         break;

            //         case 'btn_end_1':
            //         $('.balance .submit img').attr("src",'./imgs/'+imgUrl+'.png')
            //         break;

            //         case 'btn_again_1':
            //         $('.balance .start img').attr("src",'./imgs/'+imgUrl+'.png')
            //         break;

            //         case 'btn_again_1':
            //         $('.balance .start img').attr("src",'./imgs/'+imgUrl+'.png')
            //         break;

            //         case 'btn_back_1':
            //         $('.info .start img').attr("src",'./imgs/'+imgUrl+'.png')
            //         break;
            //     }
            // }
            if (showWebNum == 1) {
                document.getElementById('videoBg').play();
            }
            $scope.showWeb = showWebNum;
            if (showWebNum == 2) {
                randomArray = [];
                $scope.sourtRandomObj();
                $scope.mark = 0;
                $scope.time = 30;
                $scope.isChoiceQight = false;
                $scope.picJson = $scope.picJsonObj[randomArray[0]];
                $('.game .right').css($scope.picJsonObj[randomArray[0]].css);
            }
        }
        $('.game .right').css({
            width: '100px'
        });



        // 倒计时
        $interval(function () {
            var pro = document.getElementsByTagName("progress")[0];
            if (pro) {
                if ($scope.time < 1 && $scope.showWeb == 2) {
                    if ($scope.mark > 5) {
                        $scope.showWeb = 3;
                    } else {
                        $scope.showWeb = 5;
                    }
                    return;
                }
                $scope.time = $scope.time - 1;
                pro.value = $scope.time;
            }

        }, 1000);


        // 找茬正确点击
        $scope.touchRight = function () {
            if ($scope.isChoiceQight) {

            } else {
                $('.right').css({
                    opacity: 1
                })

                // document.getElementById('videoTrue').fastSeek(0);
                document.getElementById('videoTrue').play();

                $scope.clickRight = true;
                $scope.mark += 1;
                $scope.isChoiceQight = true;

                $timeout(function () {
                    if ($scope.mark > 47) {
                        $scope.showWeb = 3;
                        return;
                    }
                    $('.right').css({
                        opacity: 0
                    })
                    $scope.clickRight = false;
                    $scope.time = 30;
                    $scope.picJson = $scope.picJsonObj[randomArray[$scope.mark]];
                    $('.game .right').css($scope.picJsonObj[randomArray[$scope.mark]].css)

                    var pro = document.getElementsByTagName("progress")[0];
                    pro.value = 30;
                    $scope.isChoiceQight = false;
                    console.log($scope.mark)
                }, 1000)
            }
        }

        // 找茬错误点击
        window.touchWrong = function (event, elem) {
            if ($scope.clickRight) {
                return;
            }
            $scope.time -= 3;
            if ($scope.time <= 0) {
                $scope.time = 0;
            }
            document.getElementById('videoError').play();
            // 初始化数据
            $("img").remove(".wrong");
            var $doc = $('.game');
            var newLeft = event.pageX - $doc[0].offsetLeft;
            var newTop = event.pageY - $doc[0].offsetTop;
            var windowWidth = $(window).width() * 0.08 + 5;
            var firstWidth = $('.game').children(elem).width();
            var firstHeight = $('.game').children(elem).height();
            // 约束左右范围
            if (newLeft < windowWidth) {
                newLeft = windowWidth;
            }

            if (newLeft > (firstWidth - windowWidth)) {
                newLeft = firstWidth - windowWidth;
            }
            // 约束上下范围
            // 第一张图片
            if (elem == '.first') {
                if (newTop > (firstHeight - windowWidth)) {
                    newTop = firstHeight - windowWidth - 5;
                }
                if (newTop < windowWidth) {
                    newTop = windowWidth;
                }
            }
            // 第二张图片
            if (elem == '.second') {
                if (newTop < (firstHeight + windowWidth)) {
                    newTop = firstHeight + windowWidth + 5;
                }
                if (newTop > (2 * firstHeight - windowWidth)) {
                    newTop = (2 * firstHeight - windowWidth);
                }
            }


            $('<img src="./imgs/wrong.png"  class="wrong" />')
                .css({
                    position: 'absolute',
                    left: newLeft,
                    top: newTop,
                })
                .appendTo('.game').children(elem);

            $timeout(function () {
                $("img").remove(".wrong");
            }, 500)
        };


        // 提交信息
        $scope.user = {
            name: '',
            age: '',
            city: '',
            company: '',
            tel: '',
            dec: '',
            mark: $scope.mark
        }
        $scope.postInfo = function () {
            $('.info .submit img').attr("src",'./imgs/btn_true_1.png');
            if ($scope.user.name && $scope.user.tel) {
                $http({
                    url: 'http://www.rvici.com/richard_wolf_admin/new.php',
                    method: "POST",
                    data: $httpParamSerializer($scope.user),
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                }).then(function (res) {
                    console.log(res)
                    $scope.isShowSubmit = true;
                    $('.AllSubmit').css({
                        opacity: 1
                    })
                    $timeout(function () {
                        $scope.isShowSubmit = false;
                        $('.AllSubmit').css({
                            opacity: 0
                        })
                        $scope.showWeb = 0;
                        $('.info .submit img').attr("src",'./imgs/btn_true.png');
                    }, 2000)
                });
            } else {
                $scope.isShowSubmitfalse = true;
                $('.AllSubmit').css({
                    opacity: 1
                })
                $timeout(function () {
                    $scope.isShowSubmitfalse = false;
                    $('.AllSubmit').css({
                        opacity: 0
                    })
                    $('.info .submit img').attr("src",'./imgs/btn_true.png');
                }, 1000)
            }
        }






    }]);



$(function () {
    let windowHeight = $(window).height() + 'px';
    $('.info').css({
        height: windowHeight
    })
})