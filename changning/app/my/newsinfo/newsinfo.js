angular.module('newsinfoModule', [])
    .controller('newsinfoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goActiveInfo = function(num) {
            $state.go('activeinfo', {
                activeId: num
            })
        }

        $scope.menuinfo1 = false;
        $scope.menuinfo2 = false;
        $scope.openMenu1 = function() {
            $scope.menuinfo1 = true;
            $scope.menuinfo2 = false;
        }
        $scope.closeMenu1 = function() {
            $scope.menuinfo1 = false;
        }
        $scope.openMenu2 = function() {
            $scope.menuinfo2 = true;
            $scope.menuinfo1 = false;
        }
        $scope.closeMenu2 = function() {
            $scope.menuinfo2 = false;
        }



    }]);