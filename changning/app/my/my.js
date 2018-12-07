angular.module('myModule', [])
    .controller('myCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.choiceWeb1 = function() {
            $state.go('my1')
        }
        $scope.choiceWeb2 = function() {
            $state.go('my2')
        }
    }]);