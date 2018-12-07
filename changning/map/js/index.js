angular.module('myapp', ['ionic'])
    .controller('myCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', '$stateParams', function($scope, $state, $http, $httpParamSerializer, $stateParams) {

        var imgWidth = $('.container img').width();
        $scope.address = '临空';
        $scope.isCanDown = false;
        $scope.choiceObjFun = function(num) {

            if (num == 0) {
                $scope.address = "临空";

                $(".container").scrollLeft(0);
                initMap(121.429295, 31.21995);

            } else if (num == 1) {
                $scope.address = "新虹桥";

                $(".container").scrollLeft(imgWidth * 0.37);
                initMap(121.398824, 31.203767);

            } else {
                $scope.address = "中山";
                $(".container").scrollLeft(imgWidth * 0.7);
                initMap(121.353981, 31.204755);


            }

            $('.nav_hide div').css({
                color: '#8E8F94'
            })
            $('.newcontainer div').css({
                display: 'none'
            })
            $('.nav_hide div').eq(num).css({
                color: '#75AAB5'
            })
            $('.newcontainer div').eq(num).css({
                display: 'block'
            })
            $('.nav_hide').slideUp('slow');
            $scope.isCanDown = false;
        }

        $scope.openNavHide = function() {
            $('.nav_hide').slideDown('slow');
            $scope.isCanDown = true;
        }
        $scope.closeNavHide = function() {
            $('.nav_hide').slideUp('slow');
            $scope.isCanDown = false;
        }


        $scope.mapchoiceBol = 1;
        $scope.mapchoiceFun = function(num) {
            $scope.mapchoiceBol = num;
            if (num == 1) {
                $('#dituContent').css('display', 'none')
            } else {
                $('#dituContent').css('display', 'block')

            }
        }


        $scope.goBusiness = function() {
            window.location.href = '../#/hotbusiness'
        }
    }])