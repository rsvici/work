angular.module('contentModule', [])
    .controller('contentCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {




        $(function() {
            let windowHeight = $(window).height() + 'px';
            $('.content').css({
                height: windowHeight
            })
            console.log(windowHeight);
        })

    }]);