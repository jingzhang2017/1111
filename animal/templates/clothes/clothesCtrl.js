/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("clothesCtrl", function ($scope) {
        // 准备商品数据
        $scope.products = [
            {title: "宠物书01", desc: "我是幸福猫奴", imgsrc: "images/TB1_100x100.jpg"},
            {title: "宠物书02", desc: "我是幸福猫奴", imgsrc: "images/TB2_100x100.jpg"},
            {title: "宠物书03", desc: "我是幸福猫奴", imgsrc: "images/TB3_100x100.jpg"},
            {title: "宠物书04", desc: "我是幸福猫奴", imgsrc: "images/TB4_100x100.jpg"}
        ];
    });