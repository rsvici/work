angular.module('hotbusinessModule', [])
    .controller('hotbusinessCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goInfo = function(num) {
            $state.go('businessinfo', {
                businessId: num
            })
        };

    }]);