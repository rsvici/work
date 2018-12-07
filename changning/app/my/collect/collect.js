angular.module('collectModule', [])
    .controller('collectCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.cancelBoxIsShow = false;
        $scope.openCancelBox = function() {
            $scope.cancelBoxIsShow = true;

        }

        $scope.closeCancelBox = function() {
            $scope.cancelBoxIsShow = false;
        }

    }]);