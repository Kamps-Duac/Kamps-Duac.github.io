'use strict';

describe('Service: WordpressService', function () {

  // load the service's module
  beforeEach(module('kampsduacApp'));

  // instantiate service
  var WordpressService;
  beforeEach(inject(function (_WordpressService_) {
    WordpressService = _WordpressService_;
  }));

  it('should do something', function () {
    expect(!!WordpressService).toBe(true);
  });

  it('should return the number of words asked for in a post', function () {
    expect((WordpressService(1, 50)).length).toBe(50);
  });

});
