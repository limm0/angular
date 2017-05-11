var app=angular.module("app");
app.directive("myCanvas",function(){
    return {
        restrict:"E",
        templateUrl:"views/rateCanvas.html",
        scope:{
            amount:"=",
            usable:"="
        },
        replace:true,
        link:function(scope,ele,attr){
            var cvs=ele[0].getContext("2d");
            cvs.beginPath();
            cvs.arc(24,24,20,0,Math.PI*2);
            cvs.fillStyle="#FF6060";
            cvs.fill();
            var rate=(scope.amount-scope.usable)/scope.amount*360*Math.PI/180-Math.PI/2;
            cvs.beginPath();
            cvs.lineWidth="4";
            cvs.strokeStyle="#F9C64F";
            cvs.arc(24,24,22,-Math.PI/2,rate);
            cvs.stroke();
        }
    }
});