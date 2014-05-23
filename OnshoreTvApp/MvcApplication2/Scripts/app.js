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
           templateUrl: 'static/bootCamp.html',
           controller: 'BootCampCtrl'
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
         templateUrl: 'static/newJLL2.html',
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
             templateUrl: 'static/welcomeSlide.html',
             controller: 'DefaultCtrl'
         })
         .when('/view/19', {
             templateUrl: 'static/purpose.html',
             controller: 'DefaultCtrl'
         })
        .when('/view/20', {
            templateUrl: 'static/agilePrinciples.html',
            controller: 'DefaultCtrl'
        })    
      .otherwise({
        redirectTo: '/'
      });
  });
