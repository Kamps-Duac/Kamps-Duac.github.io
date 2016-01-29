'use strict';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
    .controller('BlogCtrl', function($scope) {
        $scope.blogs = [{
            name: 'KodingKamper',
            url: 'https://freeasincode.wordpress.com/',
            caption: 'Bliki about engineering topics'
        }, {
            name: 'FreeAsInGuac',
            url: 'https://freeasinguac.wordpress.com/',
            caption: 'Personal notes about various topics I am studying'
        }];
    });
