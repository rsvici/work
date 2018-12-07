angular.module('hotbusinessModule', [])
    .controller('hotbusinessCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goInfo = function(num) {
            $state.go('businessinfo', {
                businessId: num
            })
        };

        $scope.goShopList = function(num) {
            $state.go('shoplist', {
                businessId: num
            })
        }

        $scope.goShopInfo = function(num) {
            $state.go('shopinfo', {
                shopId: num
            })
        };




    }]);