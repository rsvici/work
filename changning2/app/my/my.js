angular.module('myModule', [])
    .controller('myCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.shownum = 0;
        $scope.choiceWeb = function(num) {

            $scope.shownum = num;

            console.log($scope.shownum)
        }



    }]);