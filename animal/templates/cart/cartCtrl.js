/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("cartCtrl",function($scope,shopCart){
        $scope.cart = shopCart.findAll();

        // ///////////删除购物车中商品的方法
        $scope.remove = function(title){
            shopCart.remove(title);
        };

        $scope.clear=function(){
            shopCart.clear();
        };

        // 求总金额
        $scope.money = function(){
            var total = 0;
            // 遍历统计
            angular.forEach($scope.cart,function(item){
                total += item.number * item.product.price;   // 累加金额
            });
            return total;
        };
    });