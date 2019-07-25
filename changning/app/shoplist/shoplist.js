angular.module('shoplistModule', [])
    .controller('shoplistCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function ($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {

        $scope.businessId = 'xinhongqiao';
        $scope.shopList = hotBusinessList[$scope.businessId];

        // 获取商圈中的商场
        $scope.getTradingAreaList = function (type) {
            $http({
                url: adminUrl + "tradingArea/list",
                params: {
                    type: type,
                    isShoppingMall: 0
                },
                method: 'get'
            }).then(function (res) {
                $scope.shopList = res.data.data.parameterType;
            }, function (error) {

            })
        }
        $scope.getTradingAreaList($stateParams.businessId)


        $scope.goBusiness = function (num) {
            $state.go('hotbusiness')
        };


        $scope.goShopInfo = function (shopItem) {
            console.log(shopItem)
            $state.go('shopinfo',{shopItemId:shopItem.id})
        };

        $scope.goMap = function () {
            window.location.href = './map/'
        }

    }]);