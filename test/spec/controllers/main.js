'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('kampsduacApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have an md5 hash of the email address in the scope.', function () {
    expect(scope.gravatar).toBeTruthy();
  });
});
