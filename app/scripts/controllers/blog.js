'use strict';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
    .controller('BlogCtrl', function(WordpressService, $scope, $http) {

        // Could use String Template here but it's not widely supported yet
        var wp_url_pre = 'https://public-api.wordpress.com/rest/v1.1/sites/';
        var wp_url_suf = '.wordpress.com/posts/';
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
        // TODO: need to loop through $scope.blogs to plug in the 'name' to the API call
        // Then add to post_content the contents of paragraphs.
        // for (var i = 0; i < $scope.blogs.length; i++) {

        //     var post;
        //     var blog = $scope.blogs[i];

        //     wp_url = wp_url_pre + blog.name + wp_url_suf;
        //     // TODO: How can I get the $scope into here??
        //     function fetch() {
        //         var posts;
        //         WordpressService.getPosts(wp_url, '5').then(function(p) {

        //             for (var j = 0; j < p.length; j++) {
        //                 post = {
        //                     'title': p[j].title,
        //                     'excerpt': p[j].excerpt
        //                 };
        //                 posts.push(post);
        //             }

        //         });

        //         return posts;
        //     }
        //     $scope.blogs[i].posts = fetch();

        // }
    });
