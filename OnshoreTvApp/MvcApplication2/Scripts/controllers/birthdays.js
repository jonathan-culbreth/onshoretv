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
      $http.get('api/employees/1').success(function (data) {
          var k = 0;
          x(k)
          function x(k) {
              if (data && k < data.length) {
                  $('#name')
                           .hide()
                           .text(data[k]+"th")
                           .fadeTo(3000, 1)
                           .fadeTo(3000, 0);
                  setTimeout(
                      function () {
                          x(k + 1);
                      }, 6000
                  );
              }
          }
          var a = Math.floor((Math.random() * 19) + 1)
          var time = (1000+((data.length) * (6000)))
          window.setTimeout(function () { window.location.replace("http://localhost:63705/#/view/" + parseInt(a)) }, time);
          timedRefresh(300000);
          function timedRefresh(timeoutPeriod) {
              setTimeout("location.reload(true);", timeoutPeriod);
          }
      });
      
  });