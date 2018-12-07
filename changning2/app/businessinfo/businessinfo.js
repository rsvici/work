angular.module('businessinfoModule', [])
    .controller('businessinfoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goShopList = function(num) {
            $state.go('shoplist', {
                businessId: num
            })
        };




    }]);