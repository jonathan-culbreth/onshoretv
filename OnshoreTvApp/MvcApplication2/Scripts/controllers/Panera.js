'use strict';

angular.module('onshoretvApp')
  .controller('PaneraCtrl', function ($scope, $http) {
      $http.get('api/clientpages/Panera').success(function (data) {
          $scope.employees = data;
      });
      var a = Math.floor((Math.random() * 19) + 1)
      window.setTimeout(function () { window.location.replace("http://localhost:63705/#/view/" + parseInt(a)) }, 20000);
  });