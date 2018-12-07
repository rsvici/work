angular.module('teachlistModule', [])
    .controller('teachlistCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        $scope.goTeachInfo = function(num) {

            $state.go('teachinfo', {
                teachId: num
            })
        }

    }]);