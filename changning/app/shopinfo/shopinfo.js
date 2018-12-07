angular.module('shopinfoModule', [])
    .controller('shopinfoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        $scope.shopId = $stateParams.shopId;

        $scope.goAdress = function(num) {
            window.location.href = './map/'
        };

        $scope.goActivelist = function(num) {
            $state.go('activelist', {
                shopId: num
            })
        };

    }]);