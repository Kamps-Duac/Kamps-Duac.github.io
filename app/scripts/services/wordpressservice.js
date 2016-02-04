'use strict';

/**
 * @ngdoc service
 * @name kampsduacApp.WordpressService
 * @description
 * # WordpressService
 * Service in the kampsduacApp.
 */
angular.module('kampsduacApp')
    .factory('WordpressService', function($http) {
        
        var BLOG_POST_COUNT = 5;

        var WordpressService = {

            async: function(url) {
                
                return $http.get(url);
            },

            getPosts: function(blogName) {
                var url = 'https://public-api.wordpress.com/rest/v1.1/sites/' + blogName +
                    '.wordpress.com/posts/?number=' + BLOG_POST_COUNT;

                return this.async(url).then(function(response) {
                    console.log(response);
                    posts = response.data.posts;

                    return posts;
                });

                return promise;
            }
        };
        return WordpressService;


        // AngularJS will instantiate a singleton by calling "new" on this function
        // Throw in a Stubb here for developing the parser

        // Parse the stubb to get first 50 words
        // Return the title and first 50 words
    });
