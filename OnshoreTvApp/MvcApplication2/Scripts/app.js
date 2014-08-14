'use strict';

angular.module('onshoretvApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'static/main2.html',
          controller: 'DefaultCtrl'
      })
       .when('/view/1', {
           templateUrl: 'static/panera.html',
           controller: 'DefaultCtrl'
       })
      .when('/view/2', {
          templateUrl: 'static/birthdays.html',
          controller: 'BirthDayCtrl'
      })
     .when('/view/3', {
         templateUrl: 'static/malwarePrevention.html',
         controller: 'DefaultCtrl'
     })
     .when('/view/4', {
         templateUrl: 'static/offices.html',
         controller: 'DefaultCtrl'
     })
     .when('/view/5', {
         templateUrl: 'static/portableelectronics.html',
         controller: 'DefaultCtrl'
     })
     .when('/view/6', {
         templateUrl: 'static/passSec.html',
         controller: 'DefaultCtrl'
     })
     .when('/view/7', {
         templateUrl: 'static/main.html',
         controller: 'DefaultCtrl'
     })
     .when('/view/8', {
         templateUrl: 'static/defineScrum.html',
         controller: 'DefaultCtrl'
     })
     .when('/view/9', {
          templateUrl: 'static/glennvilleOffice.html',
          controller: 'DefaultCtrl'
     })
     .when('/view/10', {
         templateUrl: 'static/success.html',
         controller: 'DefaultCtrl'
     })
     .when('/view/11', {
         templateUrl: 'static/newJLL.html',
         controller: 'DefaultCtrl'
     })
     .when('/view/12', {
         templateUrl: 'static/howWeDoIt.html',
         controller: 'DefaultCtrl'
     })
        .when('/view/13', {
            templateUrl: 'static/david.html',
            controller: 'DefaultCtrl'
        })
        .when('/view/14', {
            templateUrl: 'static/whatWeAre.html',
            controller: 'DefaultCtrl'
        })
        .when('/view/15', {
            templateUrl: 'static/whatWeDo.html',
            controller: 'DefaultCtrl'
        })
        .when('/view/16', {
            templateUrl: 'static/missionStatement.html',
            controller: 'DefaultCtrl'
        })
        .when('/view/17', {
            templateUrl: 'static/AltantaOffice.html',
            controller: 'DefaultCtrl'
        })
         .when('/view/18', {
             templateUrl: 'static/purpose.html',
             controller: 'DefaultCtrl'
         })
        .when('/view/19', {
            templateUrl: 'static/agilePrinciples.html',
            controller: 'DefaultCtrl'
        })
        .when('/view/20', {
            templateUrl: 'static/newPanera.html',
            controller: 'DefaultCtrl'
        })
        .when('/view/21', {
            templateUrl: 'static/anniversaries.html',
            controller: 'HireDateCtrl'
        })
        .when('/view/22', {
            templateUrl: 'static/scott.html',
            controller: 'DefaultCtrl'
        })
         .when('/view/23', {
             templateUrl: 'static/welcomeScott.html',
             controller: 'DefaultCtrl'
         })
         .when('/view/24', {
             templateUrl: 'static/agileprinciples2.html',
             controller: 'DefaultCtrl'
         })
         .when('/view/25', {
             templateUrl: 'static/agileprinciples3.html',
             controller: 'DefaultCtrl'
         })
         .when('/view/26', {
             templateUrl: 'static/agileprinciples4.html',
             controller: 'DefaultCtrl'
         })
// pages not in current runthough begin here
         //.when('/view/23', {
         //    templateUrl: 'static/Bilo.html',
         //    controller: 'DefaultCtrl'
         //})
      .otherwise({
        redirectTo: '/'
      });
  });
