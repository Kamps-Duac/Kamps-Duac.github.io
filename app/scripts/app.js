'use strict';

/**
 * @ngdoc overview
 * @name kampsduacApp
 * @description
 * # kampsduacApp
 *
 * Main module of the application.
 */
angular
  .module('kampsduacApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'angular-md5'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
