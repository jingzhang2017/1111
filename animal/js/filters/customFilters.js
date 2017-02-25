/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个自定义过滤器
angular.module("myapp")
    .filter("picFilter",function(){
        return function (imgsrc){
            return imgsrc.replace("100x100","400x400");
        }
    })
//第二种方法
   /* .filter("booksFilter",function(){
        return function (imgsrc){
            return imgsrc.replace("100x100","400x400");
        }
    });*/