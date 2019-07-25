angular.module('shopinfoModule', [])
    .controller('shopinfoCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', '$sce', function ($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams, $sce) {

       
        document.documentElement.scrollTop = 0;

        $scope.getTradingAreaList = function (id) {
            $http({
                url: adminUrl + "tradingArea/list",
                params: {
                    id
                },
                method: 'get'
            }).then(function (res) {
                console.log(res)
                $scope.shopInfo = res.data.data.parameterType[0] //获取信息
                console.log($scope.shopInfo);
                $scope.shopInfo.content = $sce.trustAsHtml($scope.shopInfo.content)
            }, function (error) {

            })
        }
        $scope.getTradingAreaList($stateParams.shopItemId);










        // 跳转到活动
        $scope.goActivelist = function () {
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram) {
                    wx.miniProgram.navigateTo({
                        url: '/pages/active/active?tradingAreaId=' + $scope.shopInfo.id
                    });
                }
            });

        };

        $scope.goMap = function () {
            var endsouth = $scope.shopInfo.longitude.split(',')[1];
            var endwest = $scope.shopInfo.longitude.split(',')[0];
            window.location.href = `./map/index.html?endsouth=${endsouth}&endwest=${endwest}`
        }


    }]);