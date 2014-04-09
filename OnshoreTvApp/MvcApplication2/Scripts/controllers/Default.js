'use strict';

angular.module('onshoretvApp')
  .controller('DefaultCtrl', function ($scope, $http) {
          $('body')
            .hide()
            .fadeTo(3000, 1);
    setTimeout(
    function () {
        $('body')
          .fadeTo(3000, 0);
     },16000);
     var a = Math.floor((Math.random() *21) + 1);
     window.setTimeout(function () { window.location.replace("http://localhost:63705/#/view/" + parseInt(a)) }, 20000);
  });