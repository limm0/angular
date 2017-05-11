var app=angular.module("app");
app.directive("myTab",function($timeout){
    return {
        restrict:"E",
        templateUrl:"views/banner.html",
        replace:true,
        scope:{
            arr:"=",
            cfg:"="
        },
        controller:function($scope){

        },
        link:function(scope,ele,attr){
            $timeout(function(){
                new Swiper(ele[0],scope.cfg)
            },0)
        }
    }
});
app.controller("myCtrl",function($scope){
    $scope.arr=[
        {
            src:"img/home/banner.gif"
        },
        {
            src:"img/home/banner.gif"
        },
        {
            src:"img/home/banner.gif"
        }
    ];
    $scope.config={
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop:true
    }
});