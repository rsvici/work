angular.module('gamelistModule', [])
    .controller('gamelistCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        var bannerSwiper = new Swiper('.teach_banner', {
            loop: true, // 循环模式选项
            autoplay: true,
            effect: 'coverflow',
            slidesPerView: 1.1,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 22,
                stretch: 0,
                depth: 60,
                modifier: 2,
                slideShadows: false
            },
        })

    }]);