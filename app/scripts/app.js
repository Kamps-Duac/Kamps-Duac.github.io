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
        'ngSanitize',
        'angular.filter',
        'angular-md5'
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
