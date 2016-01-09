'use strict';

// Declare app level module which depends on views, and components
angular.module('projectGuac', [
  'ngRoute',
  'projectGuac.projectListView',
  'projectGuac.blogListView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  otherwise({
  	redirectTo: '/projects'});
}]);
