'use strict';

angular.module('onshoretvApp')
  .controller('BootCampCtrl', function ($scope, $http) {
      
      $("#names")
            .text("TIME");
      $http.get('api/pages/1').success(function (data) {

          var b = data;
          window.setTimeout(function () { window.location.replace("http://localhost:63705/#/view/" + parseInt(b)) }, 20000);
      });
      timedRefresh(300000);
      function timedRefresh(timeoutPeriod) {
          setTimeout("location.reload(true);", timeoutPeriod);
      }
  });