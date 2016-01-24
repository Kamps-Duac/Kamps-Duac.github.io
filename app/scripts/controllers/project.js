'use strict';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
  .controller('ProjectCtrl', function ($scope) {
    $scope.projects = ['Cat Clicker', 'mapacious'];
  });
