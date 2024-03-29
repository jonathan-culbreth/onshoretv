﻿'use strict';

angular.module('onshoretvApp')
  .controller('HireDateCtrl', function ($scope, $http) {

     
      var time = 0;
      $http.get('api/hiredates/5').success(function (data) {
          var k = 0;
          x(k)
          function x(k) {
              if (data && k < data.length) {
                  $('#name')
                           .hide()
                           .text(data[k])
                           .fadeTo(3000, 1)
                           .fadeTo(3000, 0);

                  setTimeout(
                      function () {
                          x(k + 1);
                      }, 6000
                  );
              }
          }

          time = (1000 + ((data.length) * (6000)))

      });
      $http.get('api/seen/1').success(function (data) {
        
          var b = data;
          if (b == 1) {
              setTimeout("location.reload(true);", 0);
          }
          else {
              $http.get('api/pages/1').success(function (data) {

                  var b = data;
                  window.setTimeout(function () { window.location.replace("http://localhost:63705/#/view/" + parseInt(b)) }, time);
              });
          }

      });
      timedRefresh(300000);
      function timedRefresh(timeoutPeriod) {
          setTimeout("location.reload(true);", timeoutPeriod);
      }

  });