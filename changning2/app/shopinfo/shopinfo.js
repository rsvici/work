angular.module('shopinfoModule', [])
    .controller('shopinfoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goAdress = function(num) {
            $state.go('hotbusiness')
        };

        $scope.goActivelist = function(num) {
            $state.go('activelist', {
                shopId: num
            })
        };

    }]);