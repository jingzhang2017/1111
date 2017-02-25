/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("detailBkCtrl", function ($scope,$stateParams,shopCart) {
        //console.log("title:" + $stateParams.title);
        // 准备商品数据
        $scope.products = [
            {title: "狗1",price:268.00, desc: "华丽田园犬华丽田园犬", imgsrc: "images/TC1_100x100.jpg"},
            {title: "狗2",price:568.00, desc: "华丽田园犬华丽田园犬", imgsrc: "images/TC2_100x100.jpg"},
            {title: "狗3",price:168.00, desc: "华丽田园犬华丽田园犬", imgsrc: "images/TC3_100x100.jpg"},
            {title: "狗4",price:368.00, desc: "华丽田园犬华丽田园犬", imgsrc: "images/TC4_100x100.jpg"}
        ];

        // 解析参数，查找匹配商品显示
        $scope.product = {};
        angular.forEach($scope.products,function(product,index){
            if(product.title == $stateParams.title){
                $scope.product = product;
                return;
            }
            console.log("#" + index);
        });

        // 响应加入购物车代码
        $scope.add = function(product){
            shopCart.add(product);
        };
    });