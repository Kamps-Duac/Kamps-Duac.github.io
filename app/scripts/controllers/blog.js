'use strict';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
    .controller('BlogCtrl', function(WordpressService, $scope) {
        $scope.blogs = [{
            name: 'KodingKamper',
            url: 'https://freeasincode.wordpress.com/',
            caption: 'Bliki about engineering topics'
        }, {
            name: 'FreeAsInGuac',
            url: 'https://freeasinguac.wordpress.com/',
            caption: 'Personal notes about various topics I am studying'
        }];

        WordpressService.getPosts('https://public-api.wordpress.com/rest/v1.1/sites/kodingkamper.wordpress.com/posts/', '1').then(function(p) {
            $scope.posts = p.posts[0];
        });
    });
