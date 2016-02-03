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
        var WordpressService = {

            getPosts: function(url, post_count) {

                var promise = $http.get(url + '?number=' + post_count).then(function(response) {
                    console.log(response);

                    return response.data;
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
