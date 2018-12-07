angular.module('lehuoModule', [])
    .controller('lehuoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        var mySwiper = new Swiper('.banner1', {
            direction: 'horizontal', // 切换选项
            loop: true, // 循环模式选项
            autoplay: true, //可选选项，自动滑动
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })

        var bannerSwiper = new Swiper('.teach_banner', {
            loop: true, // 循环模式选项
            effect: 'coverflow',
            slidesPerView: 1.2,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 24,
                stretch: 0,
                depth: 60,
                modifier: 2,
                slideShadows: false
            },
        })

        var spaceSwiper = new Swiper('.space_banner', {
            slidesPerView: 3.3,
            spaceBetween: 13,
            slidesOffsetBefore: 13,
        })
        var gameSwiper = new Swiper('.game_banner', {
            slidesPerView: 3.3,
            spaceBetween: 13,
            slidesOffsetBefore: 13,
        })
        $scope.goBusiness = function() {
            $state.go('hotbusiness')
        }
        $scope.goTeachList = function() {
            $state.go('teachlist')
        }
        window.goTeachInfo = function(num) {
            $state.go('teachinfo', {
                teachId: num
            })
        }
        $scope.goGameList = function() {
            $state.go('gamelist')
        }
        $scope.goGameInfo = function(num) {
            window.location.href = 'http://api.5v5.com/mp/api/news?token=null&id=1320';
        }
        $scope.goSpaceList = function() {
            $state.go('spacelist')
        }
        $scope.goSpaceInfo = function(num) {
            $state.go('spaceinfo', {
                spaceId: num
            })
        }
        $scope.goAcitveList = function() {
            $state.go('activelist')
        }

        $scope.goMap = function() {
            window.location.href = './map/'
        }



        window.goActiveInfo = function(num) {
            $state.go('activeinfo', {
                activeId: num
            })
        }

        $scope.goActiveInfo = function(num) {
            $state.go('activeinfo', {
                activeId: num
            })
        }

        $scope.navBol = false;
        $scope.shoiceNavbol = function() {
            $scope.navBol = !$scope.navBol
        }

        $scope.openType = function() {
            $('.btnlx').slideToggle("slow")
        }

        setTimeout(function() {
            laydate.render({
                elem: '#test1', //指定元素
                calendar: true,
            });
        }, 500)



        window.onscroll = function() {
            //变量t是滚动条滚动时，距离顶部的距离
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollup = document.getElementById('scrollup');

            console.log(t)
            if (t <= 120) { //恢复正常
                $('.lehuo .choiceTop').css({
                    'background-color': 'transparent',
                    'opacity': 0.5
                });
                $('.lehuo  .map').css({
                    display: 'none'
                });
                $('.lehuo  .busi').css({
                    display: 'none'
                });
                $('.lehuo .choiceTop form label').css({
                    'margin-left': '19vw'
                })
            } else {
                $('.lehuo .choiceTop').css({
                    'background-color': '#f1f1f1',
                    'opacity': 1
                });
                $('.lehuo  .map').css({
                    display: 'block'
                });
                $('.lehuo .busi').css({
                    display: 'block'
                });
                $('.lehuo .choiceTop form label').css({
                    'margin-left': '7vw'
                })
            }
        }
    }]);