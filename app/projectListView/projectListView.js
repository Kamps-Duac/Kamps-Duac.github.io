'use strict';

angular.module('projectGuac.projectListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projectListView/projectListView.html',
    controller: 'ProjectListCtrl'
  });
}])

.controller('ProjectListCtrl', ['$scope', 
	function($scope) {
		$scope.test = "Project Scope";
}]);