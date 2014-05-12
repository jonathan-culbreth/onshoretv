'use strict';

angular.module('onshoretvApp')
  .controller('PaneraDSSCtrl', function ($scope, $http) {
      $http.get('api/clientpages/PanDSS').success(function (data) {
          $scope.employees = data;
      });
  });