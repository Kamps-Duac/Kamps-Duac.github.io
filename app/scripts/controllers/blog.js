'use strict';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
    .controller('BlogCtrl', function($scope, $http) {

        // Could use String Template here but it's not widely supported yet
        var wp_url_pre = 'https://public-api.wordpress.com/rest/v1.1/sites/';
        var wp_url_suf = '.wordpress.com/posts/?number=5&order_by=modified';
        var wp_url;


        $scope.blogs = [{
            name: 'KodingKamper',
            url: 'https://KodingKamper.wordpress.com/',
            caption: 'Bliki about engineering topics',
        }, {
            name: 'FreeAsInGuac',
            url: 'https://freeasinguac.wordpress.com/',
            caption: 'Personal notes about various topics I am studying',
        }];

        angular.forEach($scope.blogs, function(blog) {
            var url = wp_url_pre + blog.name + wp_url_suf;
            var posts = $http.get(url).then(function(p) {
                blog.posts = p.data.posts;
            });
        });
    });
