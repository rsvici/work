angular.module('spacelistModule', [])
    .controller('spacelistCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.goSpaceInfo = function(num) {
            $state.go('spaceinfo', {
                spaceId: num
            })
        }
        $scope.goActiveInfo = function(num) {
            $state.go('activeinfo', {
                activeId: num
            })
        }
        $scope.choiceType = function(index) {
            $('.title span').removeClass('active');
            $('.title li').eq(index).children('span').addClass('active');
        }



    }]);