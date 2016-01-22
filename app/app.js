'use strict';

// // Declare app level module which depends on views, and components
// angular.module('projectGuac', [
//     'ngRoute',
//     'projectGuac.projectListView',
//     'projectGuac.blogListView'
// ]).
// config(['$routeProvider', function($routeProvider) {
//     $routeProvider.
//     otherwise({
//         redirectTo: '/projects'
//     });
// }]);

var projectGuacApp = angular.module('projectGuac', []);

projectGuacApp.config(function($locationProvider) {

    $locationProvider.html5Mode(true);

});



// projectGuacApp.controller('ProjectListCtrl', ['$scope',
//     function($scope) {
//         $scope.test = "Project Scope";
//     }
// ]);
