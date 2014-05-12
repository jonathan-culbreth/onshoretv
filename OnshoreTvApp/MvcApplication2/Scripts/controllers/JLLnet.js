'use strict';

angular.module('onshoretvApp')
  .controller('JLLNetCtrl', function ($scope, $http) {
      $http.get('api/clientpages/JLLNET').success(function (data) {
              $scope.employees = data;
      });
  });