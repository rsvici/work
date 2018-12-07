angular.module('nineModule', [])
    .controller('nineCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        $scope.goBusiness = function() {
            $state.go('hotbusiness')
        };
    }]);