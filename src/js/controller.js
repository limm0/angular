var app = angular.module("app");
app.controller("jijin", function ($scope, $http, $rootScope) {
    $http.get("data/data.json")
        .success(function (data) {
            $scope.data = data.data.list;
            var array=[];
            array.push("全部");
            for(var i=0;i<$scope.data.length;i++){
                var reg=/\d/;
                var ind=$scope.data[i].name.indexOf("+");
                if(ind==-1){
                    var name=$scope.data[i].name.slice(0,reg.exec($scope.data[i].name).index);
                }else{
                    var name=$scope.data[i].name.slice(0,ind);
                }
                if(array.indexOf(name)==-1){
                    array.push(name)
                }
            }
            $rootScope.list=array;
        });
    $rootScope.name='全部';
});
app.controller("zhaiquan", function ($scope, $http, $rootScope) {
    $http.get("data/data.json")
        .success(function (data) {
            $scope.data = data.data.list;
            var array=[];
            array.push("全部");
            for(var i=0;i<$scope.data.length;i++){
                var reg=/\d/;
                var ind=$scope.data[i].name.indexOf("+");
                if(ind==-1){
                    var name=$scope.data[i].name.slice(0,reg.exec($scope.data[i].name).index);
                }else{
                    var name=$scope.data[i].name.slice(0,ind);
                }
                if(array.indexOf(name)==-1){
                    array.push(name)
                }
            }
            $rootScope.list=array;
        });
    $rootScope.name='全部';
});
app.controller("index", function ($scope, $http,$rootScope) {
    $rootScope.rightBtnShow=true;
    $rootScope.headerShow=true;
    $rootScope.indexImg=true;
    $rootScope.hTitle="";
    $rootScope.rightBtn="";
    $rootScope.change="";
    $http.get("data/data.json")
        .success(function (data) {
            $scope.data = data.data.list;
        })
});
app.controller("licai", function ($scope, $rootScope) {
    $rootScope.rightBtnShow=true;
    $rootScope.headerShow=true;
    $rootScope.indexImg=false;
    $rootScope.hTitle='理财产品';
    $rootScope.rightBtn=function(){
        if($rootScope.flag==undefined){
            $rootScope.flag=false;
        }
        return {true:'filter',false:'not'}[$rootScope.flag];
    };
    $rootScope.name='全部';
    $rootScope.change = function () {
        $rootScope.flag = !$rootScope.flag;
    };
    $rootScope.checked=function(name){
        $rootScope.name=name;
    };
    $rootScope.choose=function(name){
        if($rootScope.name==name){
            return 'checked';
        }else{
            return;
        }
    };
});
app.controller("user",function($scope, $rootScope){
    $rootScope.headerShow=false;
    $rootScope.indexImg=false;
    $rootScope.hTitle='';
});
app.controller("more",function($scope, $rootScope){
    $rootScope.headerShow=true;
    $rootScope.indexImg=false;
    $rootScope.rightBtnShow=false;
    $rootScope.hTitle='更多';
    $rootScope.rightBtn="";
    $rootScope.change="";
});