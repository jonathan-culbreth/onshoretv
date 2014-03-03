'use strict';

angular.module('onshoretvApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'static/main2.html',
        controller: 'BirthDayCtrl'
      })
      .when('/view/1', {
          templateUrl: 'static/agilePrinciples.html',
        controller: 'BirthDayCtrl'
      })
      .when('/view/2', {
          templateUrl: 'static/birthday1.html',
          controller: 'BirthDayCtrl'
      })
     .when('/view/3', {
         templateUrl: 'static/malwarePrevention.html',
        controller: 'BirthDayCtrl'
     })
     .when('/view/4', {
         templateUrl: 'static/offices.html',
        controller: 'BirthDayCtrl'
     })
     .when('/view/5', {
         templateUrl: 'static/portableelectronics.html',
        controller: 'BirthDayCtrl'
     })
     .when('/view/6', {
         templateUrl: 'static/passSec.html',
        controller: 'BirthDayCtrl'
     })
     .when('/view/7', {
         templateUrl: 'static/main2.html',
          controller: 'BirthDayCtrl'
     })
     .when('/view/8', {
         templateUrl: 'static/defineScrum.html',
           controller: 'BirthDayCtrl'
     })
     .when('/view/9', {
          templateUrl: 'static/newJLL1.html',
          controller: 'BirthDayCtrl'
     })
     .when('/view/10', {
         templateUrl: 'static/newJLL2.html',
         controller: 'JLLNetCtrl'
     })
     .when('/view/11', {
         templateUrl: 'static/newPanera1.html',
         controller: 'BirthDayCtrl'
      })
     .when('/view/12', {
         templateUrl: 'static/newPanera2.html',
         controller: 'BirthDayCtrl'
     })
        .when('/view/13', {
            templateUrl: 'static/birthday2.html',
            controller: 'BirthDayCtrl'
        })
        .when('/view/14', {
            templateUrl: 'static/birthday3.html',
            controller: 'BirthDayCtrl'
        })
        .when('/view/15', {
            templateUrl: 'static/birthday4.html',
            controller: 'BirthDayCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
