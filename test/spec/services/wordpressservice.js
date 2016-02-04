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

  it('should get a response when calling async', function () {
    expect((WordpressService.async(kodingkamper))).toBeTrue();
  });

});
