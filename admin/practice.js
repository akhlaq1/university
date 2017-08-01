var app = angular.module("myApp",[]);



app.controller("ctrl1",function() {

    this.university  = {
        name : ""
    }

    this.func =  function  () {
        var nicInstance = nicEditors.findEditor('myID');
        var notes = nicInstance.getContent();

        console.log(notes);

        nicEditors.findEditor('myArea2').setContent(notes);

        console.log(this.university);

    }





});
