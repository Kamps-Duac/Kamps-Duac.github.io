'use strict';

// Declare app level module which depends on views, and components
angular.module('projectGuac', [
  'ngRoute',
  'projectGuac.projectListView',
  'projectGuac.blogListView',
  'projectGuac.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  otherwise({
  	redirectTo: '/projectListView'});
}]);
