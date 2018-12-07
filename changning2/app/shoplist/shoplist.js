angular.module('shoplistModule', [])
    .controller('shoplistCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        $scope.goBusiness = function(num) {
            $state.go('hotbusiness')
        };

        $scope.goShopInfo = function(num) {
            $state.go('shopinfo', {
                shopId: num
            })
        };


    }]);