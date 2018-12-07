angular.module('infoModule', [])
    .controller('infoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $(function() {
            let windowHeight = $(window).height() + 'px';
            $('.info').css({
                height: windowHeight
            })
            console.log(windowHeight);
        })
    }]);