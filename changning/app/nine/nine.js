angular.module('nineModule', [])
    .controller('nineCtrl', ['$scope', '$state', '$http', '$httpParamSerializer', 'adminUrl', '$interval', '$ionicPopup', '$timeout', '$stateParams', function ($scope, $state, $http, $httpParamSerializer, adminUrl, $interval, $ionicPopup, $timeout, $stateParams) {
        $scope.matrixObj = [{
            name: '上海长宁商务',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyMzkzNTU4Nw==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/1.jpg'
        }, {
            name: '上海长宁',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5ODA2NzgyNQ==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/2.jpg'
        },{
            name: '虹桥艺术中心',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4NjEyODQ1MQ==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/3.jpg'
        },{
            name: '上海国际舞蹈中心',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyOTIzODc0Mw==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/4.jpg'
        },{
            name: '环东华智尚源',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU1NjIyNTkxMg==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/5.jpg'
        },{
            name: '上海高岛屋',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5NjA4NTkzOQ==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/6.jpg'
        },{
            name: '虹桥南丰城',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MzM2OTk1OA==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/7.jpg'
        },{
            name: '上海尚嘉中心',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NDI3MzY0Mg==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/12.jpg'
        },{
            name: ' 百盛优客城市广场',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIzNjA2MzcwMg==&scene=123#wechat_redirect',
            imgUrl: './imgs/matrix/13.jpg'
        },{
            name: '金虹桥国际中心',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NTE3ODM4NQ==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/8.jpg'
        },{
            name: '巴黎春天天山店',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI1MDQyNjQzMg==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/9.jpg'
        },{
            name: '世贸商城',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NzU4Njc0NQ==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/10.jpg'
        },{
            name: '长宁来福士',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4MjM0NDU2NQ==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/11.jpg'
        },{
            name: '上生新所',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUzNDY3MDQ1Mg==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/15.jpg'
        },{
            name: '刘海粟美术馆',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MDI2ODAxOQ==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/14.jpg'
        },{
            name: '汇金百货虹桥店',
            url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3OTcwNDc0Mg==&scene=124#wechat_redirect',
            imgUrl: './imgs/matrix/16.jpg'
        }
    ]



        $scope.goBusiness = function () {
            $state.go('hotbusiness')
        };
    }]);