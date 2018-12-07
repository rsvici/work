angular.module('myApp', ['ionic', 'hotbusinessModule', 'businessinfoModule', 'shoplistModule', 'shopinfoModule', 'activelistModule', 'activeinfoModule', 'userlistModule', 'nineModule', 'kxmhModule', 'hotactiveModule', 'ardershowModule', 'spaceModule', 'lehuoModule', 'spacelistModule', 'spaceinfoModule', 'teachlistModule', 'teachinfoModule', 'gamelistModule', 'newrecommendModule', 'activeinfo1Module', 'myModule', 'bindphoneModule', 'bounsinfoModule', 'collectModule', 'redeemModule', 'settingModule', 'signModule', 'newsinfoModule'])
    // 设置域名
    .config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');
    })
    .value('adminUrl', 'http://www.appsun.com.cn')

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //去掉！
    $locationProvider.hashPrefix("");
    //其他跳转首页list
    $urlRouterProvider.otherwise("/hotbusiness");
    //设置具体的路由
    $stateProvider
    // 热门商圈
        .state("hotbusiness", {
            url: "/hotbusiness",
            views: {
                "view": {
                    templateUrl: "./app/hotbusiness/hotbusiness.html",
                    controller: "hotbusinessCtrl"
                }
            }
        })
        // 商圈详情
        .state("businessinfo", {
            url: "/businessinfo?businessId",
            views: {
                "view": {
                    templateUrl: "./app/businessinfo/businessinfo.html",
                    controller: "businessinfoCtrl"
                }
            }
        })
        //商场列表
        .state("shoplist", {
            url: "/shoplist?businessId",
            views: {
                "view": {
                    templateUrl: "./app/shoplist/shoplist.html",
                    controller: "shoplistCtrl"
                }
            }
        })
        // 商场详情
        .state("shopinfo", {
            url: "/shopinfo?shopId",
            views: {
                "view": {
                    templateUrl: "./app/shopinfo/shopinfo.html",
                    controller: "shopinfoCtrl"
                }
            }
        })
        // 活动列表
        .state("activelist", {
            url: "/activelist?shopId",
            views: {
                "view": {
                    templateUrl: "./app/activelist/activelist.html",
                    controller: "activelistCtrl"
                }
            }
        })
        // 活动详情
        .state("activeinfo", {
            url: "/activeinfo?activeId",
            views: {
                "view": {
                    templateUrl: "./app/activeinfo/activeinfo.html",
                    controller: "activeinfoCtrl"
                }
            }
        })
        // 活动详情
        .state("activeinfo1", {
            url: "/activeinfo1?activeId",
            views: {
                "view": {
                    templateUrl: "./app/activeinfo1/activeinfo1.html",
                    controller: "activeinfo1Ctrl"
                }
            }
        })
        // 商户列表
        .state("userlist", {
            url: "/userlist",
            views: {
                "view": {
                    templateUrl: "./app/userlist/userlist.html",
                    controller: "userlistCtrl"
                }
            }
        })
        // 矩阵
        .state("nine", {
            url: "/nine",
            views: {
                "view": {
                    templateUrl: "./app/nine/nine.html",
                    controller: "nineCtrl"
                }
            }
        })
        // 开心麻花
        .state("kxmh", {
            url: "/kxmh",
            views: {
                "view": {
                    templateUrl: "./app/kxmh/kxmh.html",
                    controller: "kxmhCtrl"
                }
            }
        })
        // 热门活动
        .state("hotactive", {
            url: "/hotactive",
            views: {
                "view": {
                    templateUrl: "./app/hotactive/hotactive.html",
                    controller: "hotactiveCtrl"
                }
            }
        })
        // 休闲展示
        .state("ardershow", {
            url: "/ardershow",
            views: {
                "view": {
                    templateUrl: "./app/ardershow/ardershow.html",
                    controller: "ardershowCtrl"
                }
            }
        })
        // 演绎空间
        .state("space", {
            url: "/space",
            views: {
                "view": {
                    templateUrl: "./app/space/space.html",
                    controller: "spaceCtrl"
                }
            }
        })
        //乐活
        .state("lehuo", {
            url: "/lehuo",
            views: {
                "view": {
                    templateUrl: "./app/lehuo/lehuo.html",
                    controller: "lehuoCtrl"
                }
            }
        })
        //场馆
        .state("spacelist", {
            url: "/spacelist",
            views: {
                "view": {
                    templateUrl: "./app/spacelist/spacelist.html",
                    controller: "spacelistCtrl"
                }
            }
        })
        .state("spaceinfo", {
            url: "/spaceinfo?spaceId",
            views: {
                "view": {
                    templateUrl: "./app/spaceinfo/spaceinfo.html",
                    controller: "spaceinfoCtrl"
                }
            }
        })
        //文教
        .state("teachlist", {
            url: "/teachlist",
            views: {
                "view": {
                    templateUrl: "./app/teachlist/teachlist.html",
                    controller: "teachlistCtrl"
                }
            }
        })
        .state("teachinfo", {
            url: "/teachinfo?teachId",
            views: {
                "view": {
                    templateUrl: "./app/teachinfo/teachinfo.html",
                    controller: "teachinfoCtrl"
                }
            }
        })
        //游戏
        .state("gamelist", {
            url: "/gamelist",
            views: {
                "view": {
                    templateUrl: "./app/gamelist/gamelist.html",
                    controller: "gamelistCtrl"
                }
            }
        })
        // 最新推荐
        .state("newrecommend", {
            url: "/newrecommend",
            views: {
                "view": {
                    templateUrl: "./app/newrecommend/newrecommend.html",
                    controller: "newrecommendCtrl"
                }
            }
        })
        // 我的
        .state("bindphone", {
            url: "/bindphone",
            views: {
                "view": {
                    templateUrl: "./app/my/bindphone/bindphone.html",
                    controller: "bindphoneCtrl"
                }
            }
        })
        .state("bounsinfo", {
            url: "/bounsinfo",
            views: {
                "view": {
                    templateUrl: "./app/my/bounsinfo/bounsinfo.html",
                    controller: "bounsinfoCtrl"
                }
            }
        })
        .state("collect", {
            url: "/collect",
            views: {
                "view": {
                    templateUrl: "./app/my/collect/collect.html",
                    controller: "collectCtrl"
                }
            }
        })
        .state("my", {
            url: "/my",
            views: {
                "view": {
                    templateUrl: "./app/my/index/index.html",
                    controller: "myCtrl"
                }
            }
        })
        .state("redeem", {
            url: "/redeem",
            views: {
                "view": {
                    templateUrl: "./app/my/redeem/redeem.html",
                    controller: "redeemCtrl"
                }
            }
        })
        .state("setting", {
            url: "/setting",
            views: {
                "view": {
                    templateUrl: "./app/my/setting/setting.html",
                    controller: "settingCtrl"
                }
            }
        })
        .state("sign", {
            url: "/sign",
            views: {
                "view": {
                    templateUrl: "./app/my/sign/sign.html",
                    controller: "signCtrl"
                }
            }
        })
        .state("newsinfo", {
            url: "/newsinfo",
            views: {
                "view": {
                    templateUrl: "./app/my/newsinfo/newsinfo.html",
                    controller: "newsinfoCtrl"
                }
            }
        });
});