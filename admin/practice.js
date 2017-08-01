var app = angular.module("myApp",[]);



app.controller("ctrl1",function() {

    this.university  = {
        name : date()
    }

    date = function () {
        var date = this.name.toString()
        return date
    }
    this.func =  function  () {


        alert("hello")
        console.log(this.university);

    }


});
