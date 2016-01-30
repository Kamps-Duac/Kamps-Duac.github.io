'use strict';

describe('Controller: BooksCtrl', function () {

  // load the controller's module
  beforeEach(module('kampsduacApp'));

  var BooksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BooksCtrl = $controller('BooksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
