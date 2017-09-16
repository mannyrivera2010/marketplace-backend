
describe('ClownService Tests', function() {

  var clownService;

  beforeEach(function() {
    clownService = require('../../../../app/services/circus/clown-service');
  });

  describe('lookupClown', function() {

    it('should be a function', function(done) {
      expect(clownService.lookupClown).to.be.a('function');
      done();
    });

  });
});
