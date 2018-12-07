angular.module('redeemModule', [])
    .controller('redeemCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goBounsInfo = function() {
            $state.go('bounsinfo')
        }

    }]);