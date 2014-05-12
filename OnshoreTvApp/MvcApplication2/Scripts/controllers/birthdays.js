'use strict';

angular.module('onshoretvApp')
  .controller('BirthDayCtrl', function ($scope, $http) {
    
      $('#cupcake').fadeIn(2500, function () {
          $(this).css('display', 'block');
      });

      $(function () {
          var dest = $('#hapbirth');
          dest.append("Happy Birthday!");
          dest.circleType({ radius: 384, fluid: true });
          var q = $('span[class^=char]').css('opacity', '.001').toArray();
          var c = 0;
          var i = setInterval(function () {
              
              $(q[c]).fadeTo('slow', 1);
              c += 1;
              if (c >= q.length) {
                  clearInterval(i);
              }
          }, 500);
      });
      var time = 20000;
      $http.get('api/employees/1').success(function (data) {
          var k = 0;
          x(k)
          function x(k) {
              if (data && k < data.length) {
                  $('#name')
                           .hide()
                           .text(data[k] + "th")
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