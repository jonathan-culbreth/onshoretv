'use strict';

angular.module('onshoretvApp')
  .controller('DefaultCtrl', function ($scope, $http) {
     var a = Math.floor((Math.random() *19) + 1)
     window.setTimeout(function () { window.location.replace("http://localhost:63705/#/view/" + parseInt(a)) }, 20000);
  });