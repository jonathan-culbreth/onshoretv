'use strict';

angular.module('onshoretvApp')
  .controller('BootCampCtrl', function ($scope, $http) {
      $("#names")
         .hide()
         .text("  Malika Quintero")
         .fadeTo(3000,1)
         .fadeTo(3000,0) ;
      window.setTimeout(function () {
          $("#names")
               .hide()
               .text("Kelly Leslie")
               .fadeTo(3000, 1)
               .fadeTo(3000, 0);
      },6000)
      window.setTimeout(function () { $("#names")
          .hide()
          .text("Jonathan Culbreth")
          .fadeTo(3000,1)
          .fadeTo(3000,0) ;},12000)
      window.setTimeout(function () { $("#names")
           .hide()
           .text("Brett Davis")
           .fadeTo(3000,1)
           .fadeTo(3000,0) ;},18000)
      window.setTimeout(function () { $("#names")
            .hide()
            .text("Chandler Cason")
            .fadeTo(3000,1)
            .fadeTo(3000,0) ;},24000)
      window.setTimeout(function () {
          $("#names")
              .hide()
              .text("Luis Bonilla")
              .fadeTo(3000, 1)
              .fadeTo(3000, 0);
      },30000)
      window.setTimeout(function () {$("#names")
          .hide()
          .text("Brianna Anderson")
          .fadeTo(3000,1)
          .fadeTo(3000,0) ;},36000)
    window.setTimeout(function () {$("#names")
          .hide()
          .text("Kimberly Gaston")
          .fadeTo(3000,1)
          .fadeTo(3000,0) ;},42000)
     window.setTimeout(function () {$("#names")
          .hide()
          .text("Adam Cartrette")
          .fadeTo(3000,1)
          .fadeTo(3000, 0);
     }, 48000)
     window.setTimeout(function () {$("#names")
          .hide()
          .text("Arturo Alvarez")
          .fadeTo(3000,1)
          .fadeTo(3000,0) ; }, 54000)
       window.setTimeout(function () {$("#names")
          .hide()
          .text("Christopher Gallegos")
          .fadeTo(3000,1)
          .fadeTo(3000,0) ; }, 60000)
       window.setTimeout(function () {$("#names")
         .hide()
         .text(" Wayne Warner")
         .fadeTo(3000,1)
         .fadeTo(3000,0) ; }, 66000)
      window.setTimeout(function () {$("#names")
         .hide()
         .text(" Aleris Roman-LaSalle")
         .fadeTo(3000,1)
         .fadeTo(3000,0) ; }, 72000)
      window.setTimeout(function () {$("#names")
         .hide()
         .text(" Josue Roman-LaSalle")
         .fadeTo(3000,1)
         .fadeTo(3000, 0);
      }, 78000)
      $http.get('api/seen/1').success(function (data) {

          var b = data;
          if (b == 1) {
              setTimeout("location.reload(true);", 0);
          }
          else {
              $http.get('api/pages/1').success(function (data) {

                  var b = data;
                  window.setTimeout(function () { window.location.replace("http://localhost:63705/#/view/" + parseInt(b)) }, 84000);
              });
          }

      });
      timedRefresh(300000);
      function timedRefresh(timeoutPeriod) {
          setTimeout("location.reload(true);", timeoutPeriod);
      }
  });