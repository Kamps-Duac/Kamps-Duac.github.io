'use strict';

angular.module('projectGuac.blogListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blogs', {
    templateUrl: 'blogListView/blogListView.html',
    controller: 'BlogListCtrl'
  });
}])

.controller('BlogListCtrl', ['$scope', 
	function($scope) {
		$scope.test = "Blog List Scope";

}]);