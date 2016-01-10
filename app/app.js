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

var projectGuacApp = angular.module('projectGuac', ['ngRoute']);

projectGuacApp.controller('MainCtrl', ['$scope',
    function($scope) {
        $scope.pageLocation = "Home";

        $scope.currentYear = new Date().getFullYear();
    }
]);

// projectGuacApp.controller('ProjectListCtrl', ['$scope',
//     function($scope) {
//         $scope.test = "Project Scope";
//     }
// ]);
