angular.module('newrecommendModule', [])
    .controller('newrecommendCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goActiveInfo = function(num) {
            $state.go('activeinfo', {
                activeId: num
            })
        }
        $scope.goActiveInfo1 = function(num) {
            $state.go('activeinfo1', {
                activeId: num
            })
        }
    }]);