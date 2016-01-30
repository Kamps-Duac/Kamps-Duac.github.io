'use strict';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
    .controller('BookCtrl', function($scope) {
        $scope.books = [{
            'title': 'Learn Code the Hard Way',
            'author': 'Zed Shaw',
            'desc': 'A great hands-on introduction to writing code and talking interacting with the computer',
            'link': 'http://learncodethehardway.org/',
            'img_src': 'images/lpthwbook.jpg'
        }, {
        	'title': 'Effective Java',
        	'author': 'Joshua Bloch',
        	'desc': 'The epic Java Bible',
        	'link': 'http://www.amazon.com/Effective-Java-Edition-Joshua-Bloch/dp/0321356683/',
        	'img_src': 'images/effectivejava.jpeg'
        }];
    });
