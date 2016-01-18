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

projectGuacApp.controller('MainCtrl', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
        $scope.pageLocation = "Home";
        $scope.gotoAnchor = function(ref) {
            if ($location.hash() !== ref) {
                $location.hash(ref);
            }
            $anchorScroll();
        }

        $scope.currentYear = new Date().getFullYear();
    }
]);

projectGuacApp.controller('ProjectCtrl', ['$scope',
    function($scope) {

        $("#carousel-example-generic").carousel();
    }
]);

projectGuacApp.controller('NavMenuCtrl', ['$scope',
    function($scope) {

        var moveOnMenuOpen = $(".mobileNavWrapper, .wrapper, .header, .footer, #menubuttonsvg")
        $("#mobileMenuButton").on("click", function(e) {
            e.stopPropagation();
            moveOnMenuOpen.toggleClass("showNav");
        });

    }
]);

// projectGuacApp.controller('ProjectListCtrl', ['$scope',
//     function($scope) {
//         $scope.test = "Project Scope";
//     }
// ]);
