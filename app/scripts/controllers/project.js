'use strict';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
    .controller('ProjectCtrl', function($scope) {
        $scope.projects = [{
            'name': 'Cat Clicker',
            'desc': "Vanilla Javascript appliction with that counts cat clicks. Built throughout Udacity's Javascript design patterns course.",
            'img_src': 'images/cat.jpg',
            'source': 'https://github.com/Kamps-Duac/Kamps-Duac.github.io/tree/cat_click_vanilla',
            'demo': 'https://github.com/Kamps-Duac/Kamps-Duac.github.io/tree/cat_click_vanilla'
        }, {
            'name': 'Mapacious',
            'desc': "Vanilla Javascript appliction with that counts cat clicks. sBuilt throughout Udacity's Javascript design patterns course.",
            'img_src': 'images/mapacious.jpg',
            'source': 'https://github.com/Kamps-Duac/Kamps-Duac.github.io/tree/cat_click_vanilla',
            'demo': 'https://github.com/Kamps-Duac/Kamps-Duac.github.io/tree/cat_click_vanilla'
        }];
    });
