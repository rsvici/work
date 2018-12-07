angular.module('myApp', ['ionic', 'balanceModule', 'contentModule', 'detailModule', 'indexModule', 'infoModule'])
    // 设置域名
    .config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');
    })
    .value('adminUrl', 'http://www.appsun.com.cn')
    // .value('adminUrl', 'http://192.168.0.113:8080')

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //去掉！
    $locationProvider.hashPrefix("");

    //其他跳转首页index
    $urlRouterProvider.otherwise("/index");

    //设置具体的路由
    $stateProvider
        .state("index", {
            url: "/index",
            views: {
                "view": {
                    templateUrl: "view/index.html",
                    controller: "indexCtrl"
                }
            }
        })
        .state("detail", {
            url: "/detail",
            views: {
                "view": {
                    templateUrl: "view/detail.html",
                    controller: "detailCtrl"
                }
            }
        })
        .state("content", {
            url: "/content",
            views: {
                "view": {
                    templateUrl: "view/content.html",
                    controller: "contentCtrl"
                }
            }
        })
        .state("balance", {
            url: "/balance",
            views: {
                "view": {
                    templateUrl: "view/balance.html",
                    controller: "balanceCtrl"
                }
            }
        })
        .state("info", {
            url: "/info1",
            views: {
                "view": {
                    templateUrl: "view/info.html",
                    controller: "infoCtrl"
                }
            }
        });

});