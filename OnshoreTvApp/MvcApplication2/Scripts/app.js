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
          templateUrl: 'static/birthdays.html',
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
      .otherwise({
        redirectTo: '/'
      });
  });
