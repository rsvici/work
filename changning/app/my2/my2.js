angular.module('my2Module', [])
    .controller('my2Ctrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.shownum = 2;
        $scope.choiceWeb = function(num) {
            $scope.shownum = num;
        }
    }]);