// var projectGuacControllers = angular.module('projectGuacControllers', []);

// projectGuacControllers.controller('ProjectListCtrl', ['$scope'], function($scope){
// 	$scope.test = "Project Test";
// });

// projectGuacControllers.controller('BlogListCtrl', ['$scope', function($scope){
// 	$scope.test = "Blog Test";
// }]);

projectGuacApp.controller('MainCtrl', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
        $scope.pageLocation = "Home";
        $scope.gotoAnchor = function(ref) {
            if ($location.hash() !== ref) {
                $location.hash(ref);
                $scope.pageLocation = ref;
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