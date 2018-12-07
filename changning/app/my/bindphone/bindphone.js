angular.module('bindphoneModule', [])
    .controller('bindphoneCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.setSuccess = function() {
            $state.go('my')
        }
    }]);