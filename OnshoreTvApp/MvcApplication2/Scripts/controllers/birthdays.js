'use strict';

angular.module('onshoretvApp')
  .controller('BirthDayCtrl', function ($scope, $http) {
      $http.get('api/employees/1').success(function (data) {
          if (data.replace(/\"/g, "") != "none") {
              $scope.birthday = data.replace(/\"/g, "");
          } else {
              $scope.birthday
          }
      });
  });