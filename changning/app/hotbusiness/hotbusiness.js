angular.module('hotbusinessModule', [])
    .controller('hotbusinessCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function ($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        if ($stateParams.south) {
            localStorage.setItem('south', $stateParams.south);
            localStorage.setItem('west', $stateParams.west);
        }

        // 商圈列表
        $scope.TradingAreaList = [];
        $scope.getTradingAreaList = function (type) {
            $http({
                url: adminUrl + "tradingArea/list",
                params: {
                    type: type,
                    isShoppingMall: 0
                },
                method: 'get'
            }).then(function (res) {
                $scope.TradingAreaList[type] = res.data.data.parameterType;
            }, function (error) {

            })
        }
        $scope.getTradingAreaList(0);
        $scope.getTradingAreaList(1);
        $scope.getTradingAreaList(2);


        $scope.hotBusinessList = hotBusinessList;
        $scope.goInfo = function (num) {
            $state.go('businessinfo', {
                businessId: num
            })
        };
        $scope.goShopList = function (businessId) {
            $state.go('shoplist', {
                businessId
            })
        }

        $scope.goShopInfo = function (shopItemId) {
            $state.go('shopinfo',{shopItemId})
        };




        // 11
        // 11
        // 11
        var moveX1 = 0; //X轴方向上移动的距离
        var moveY1 = 0; //Y轴方向上移动的距离
        var stepX1 = 1; //图片X轴移动的速度
        var stepY1 = 0.7; //图片Y轴移动的速度
        var directionX1 = 0; //设置图片在X轴方向上的移动方向   0:向右  1:向左
        var directionY1 = 0; //设置图片在Y轴方向上的移动方向   0:向下  1:向上
        // 22
        // 22
        // 22
        var moveX2 = 50;
        var moveY2 = 50;
        var stepX2 = 0.5;
        var stepY2 = 0.3;
        var directionX2 = 0;
        var directionY2 = 1;
        // 33
        // 33
        // 33
        var moveX3 = 40;
        var moveY3 = 40;
        var stepX3 = 0.8;
        var stepY3 = 0.6;
        var directionX3 = 1;
        var directionY3 = 0;
        window.onscroll = function () {

            //图片X轴上移动
            if (directionX1 == 0) {
                moveX1 += stepX1;
            } else {
                moveX1 -= stepX1;
            }
            if (moveX1 < 20) {
                directionX1 = 0;
                moveX1 = 20;
            }
            if (moveX1 > 80) {
                directionX1 = 1;
                moveX1 = 80;
            }
            //图片Y轴上移动
            if (directionY1 == 0) {
                moveY1 += stepY1;
            } else {
                moveY1 -= stepY1;
            }
            if (moveY1 < 20) {
                directionY1 = 0;
                moveY1 = 20;
            }
            if (moveY1 > 80) {
                directionY1 = 1;
                moveY1 = 80;
            }
            // 2
            // 2
            if (directionX2 == 0) {
                moveX2 += stepX2;
            } else {
                moveX2 -= stepX2;
            }
            if (moveX2 < 20) {
                directionX2 = 0;
                moveX2 = 20;
            }
            if (moveX2 > 80) {
                directionX2 = 1;
                moveX2 = 80;
            }

            //图片Y轴上移动
            if (directionY2 == 0) {
                moveY2 += stepY2;
            } else {
                moveY2 -= stepY2;
            }
            if (moveY2 < 20) {
                directionY2 = 0;
                moveY2 = 20;
            }
            if (moveY2 > 80) {
                directionY2 = 1;
                moveY2 = 80;
            }

            // 3
            // 3
            // 3
            if (directionX3 == 0) {
                moveX3 += stepX3;
            } else {
                moveX3 -= stepX3;
            }
            if (moveX3 < 20) {
                directionX3 = 0;
                moveX3 = 20;
            }
            if (moveX3 > 80) {
                directionX3 = 1;
                moveX3 = 80;
            }

            //图片Y轴上移动
            if (directionY3 == 0) {
                moveY3 += stepY3;
            } else {
                moveY3 -= stepY3;
            }
            if (moveY3 < 20) {
                directionY3 = 0;
                moveY3 = 20;
            }
            if (moveY3 > 80) {
                directionY3 = 1;
                moveY3 = 80;
            }

            $('.nav1 .imgsport').css({
                'backgroundPositionX': moveX1 + '%',
                'backgroundPositionY': moveY1 + '%'
            })

            $('.nav2 .imgsport').css({
                'backgroundPositionX': moveX2 + '%',
                'backgroundPositionY': moveY2 + '%'
            })

            $('.nav3 .imgsport').css({
                'backgroundPositionX': moveX3 + '%',
                'backgroundPositionY': moveY3 + '%'
            })

        }





    }]);