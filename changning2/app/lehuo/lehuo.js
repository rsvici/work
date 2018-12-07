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
        window.goActiveInfo = function(num) {
            console.log(1)
            $state.go('activeinfo', {
                activeId: num
            })
        }



    }]);