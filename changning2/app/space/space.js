angular.module('spaceModule', [])
    .controller('spaceCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        $scope.goActiveInfo = function(num) {

            $state.go('activeinfo', {
                activeId: num
            })
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
    }]);