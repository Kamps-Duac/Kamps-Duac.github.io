'use strict';

var email = 'kamps.duac@gmail.com';

var GRAVATAR_URL = 'http://www.gravatar.com/avatar/';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
    .controller('MainCtrl', ['$scope', 'md5', function($scope, md5) {
        $scope.gravatar = GRAVATAR_URL + md5.createHash(email);

        $scope.socials = [{
            'name': 'Linkedin',
            'logo_src': 'images/Logo-2C-121px-TM.png',
            'ref': 'https://www.linkedin.com/pub/scott-kamps-duac/40/a29/8a7'
        }, {
            'name': 'github',
            'logo_src': 'images/GitHub-Mark-120px-plus.png',
            'ref': 'https://github.com/kamps-duac'
        }, {
            'name': 'Twitter',
            'logo_src': 'images/TwitterLogo_55acee.png',
            'ref': 'https://twitter.com/kampsduac'
        }];
    }]);
