var app=angular.module("app");
app.filter("setData",function(){
    return function(data,param){
        if(param=='全部'){
            return data;
        }
        var arr=[];
        for(var i=0;i<data.length;i++){
            if(data[i].name.indexOf(param)!=-1){
                arr.push(data[i]);
            }
        }
        return arr;
    }
});