/**
 * Created by hxsd on 2016/12/22.
 */
angular.module("myapp", ["ionic"]);

// 配置路由
angular.module("myapp")
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            //引导页
            .state("tour",{
                url:"/tour",
                templateUrl:"templates/tour/tour.html"
            })
            // 一级路由：加载tabs.html，但不要直接显示
            .state("tabs",{
                url:"/tabs",
                abstract:true,  // 抽象地，意思是不直接显示
                templateUrl:"templates/tabs/tabs.html",
                controller:"tabsCtrl"
            })
            // 二级路由
            .state("tabs.clothes",{
                url:"/clothes",
                views:{"tab-clothes":{
                    templateUrl:"templates/clothes/clothes.html",
                    controller:"clothesCtrl"
                }}
            })
            .state("tabs.detail",{
                url:"/detail?:title",
                views:{"tab-clothes":{
                    templateUrl:"templates/detail/detail.html",
                    controller:"detailCtrl"
                }}
            })
            .state("tabs.books",{
                url:"/books",
                views:{"tab-books":{
                    templateUrl:"templates/books/books.html",
                    controller:"booksCtrl"
                }}
            })
            .state("tabs.detailBk",{
                url:"/detailBk?:title",
                views:{"tab-books":{
                    templateUrl:"templates/detailBk/detailBk.html",
                    controller:"detailBkCtrl"
                }}
            })
            .state("tabs.cart",{
                url:"/cart",
                views:{"tab-cart":{
                    templateUrl:"templates/cart/cart.html",
                    controller:"cartCtrl"
                }}
            });
        // 默认首页
        //$urlRouterProvider.otherwise("/tabs/clothes");
        //默认首页改成引导页
        $urlRouterProvider.otherwise("/tour");
    });