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
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
