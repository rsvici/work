angular.module('activeinfoModule', [])
    .controller('activeinfoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.showWeb = $stateParams.activeId;
        window.scrollTo(0, 0);
        // 选择评论
        $scope.choiceThirdLong = function(num) {

            if (num == 0) {
                $('.thirdlong1').css({
                    'display': 'block'
                })
                $('.thirdlong2').css({
                    'display': 'none'
                })
            } else {
                $('.thirdlong2').css({
                    'display': 'block'
                })
                $('.thirdlong1').css({
                    'display': 'none'
                })
            }
        }

        // 返回顶部
        $scope.goActiveInfo = function(num) {

            $state.go('activeinfo', {
                activeId: num
            })
            window.scrollTo(0, 0);
        }

        // 选择页面
        $scope.collectNum = 1;
        $scope.choiceCollectFun = function(num) {
            $scope.collectNum = num;
        }

        // 监听滚动
        window.onscroll = function() {
            //变量t是滚动条滚动时，距离顶部的距离
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollup = document.getElementById('scrollup');

            if (t <= 320) { //恢复正常
                $('.a_nav_t').css({
                    'display': 'none'
                })

            } else {
                $('.a_nav_t').css({
                    'display': 'block'
                })

            }
        }
    }]);