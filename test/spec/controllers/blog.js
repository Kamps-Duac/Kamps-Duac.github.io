'use strict';

describe('Controller: BlogCtrl', function () {

  // load the controller's module
  beforeEach(module('kampsduacApp'));

  var BlogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogCtrl = $controller('BlogCtrl', {
      $scope: scope,
      // place here mocked dependencies
    });
  }));

  // it('should attatch posts to blogs', function () {
  //   angular.forEach(scope.blogs, function(blog) {
  //     expect(blog.posts).toBeTruthy();
  //   });
  //});
});
