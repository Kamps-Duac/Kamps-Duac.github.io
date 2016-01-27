'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('kampsduacApp'));

  var ProjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should should have projects attatched to the scope', function () {
  //   expect(scope.projects).toBeTruthy;
  // });
});
