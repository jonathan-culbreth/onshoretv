'use strict';

angular.module('onshoretvApp')
  .controller('JLLCallCtrl', function ($scope, $http) {
      $http.get('api/clientpages/JLLCALL').success(function (data) {
          $scope.employees = data;
      });
  });