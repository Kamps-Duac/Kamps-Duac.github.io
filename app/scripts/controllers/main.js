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
    }]);
