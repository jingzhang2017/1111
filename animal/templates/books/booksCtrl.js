/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("booksCtrl", function ($scope) {
        // 准备商品数据
        $scope.products = [
            {title: "狗1", desc: "华丽田园犬华丽田园犬", imgsrc: "images/TC1_100x100.jpg"},
            {title: "狗2", desc: "华丽田园犬华丽田园犬", imgsrc: "images/TC2_100x100.jpg"},
            {title: "狗3", desc: "华丽田园犬华丽田园犬", imgsrc: "images/TC3_100x100.jpg"},
            {title: "狗4", desc: "华丽田园犬华丽田园犬", imgsrc: "images/TC4_100x100.jpg"}
        ];
    });