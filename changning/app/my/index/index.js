angular.module('myModule', [])
    .controller('myCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goSign = function() {
            $state.go('sign')
        }
        $scope.redeem = function() {
            $state.go('redeem')
        }
        $scope.collect = function() {
            $state.go('collect')
        }
        $scope.setting = function() {
            $state.go('setting')
        }
        $scope.bindphone = function() {
            $state.go('bindphone')
        }

        $scope.SignBoxIsShow = false;
        $scope.openSignBox = function() {
            $scope.SignBoxIsShow = true;
        }

        $scope.colseSignBox = function() {
            $scope.SignBoxIsShow = false;
        }
    }]);