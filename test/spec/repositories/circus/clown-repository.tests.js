
describe('ClownRepository Tests', function() {

  var clownRepository;

  beforeEach(function() {
    clownRepository = require('../../../../app/repositories/circus/clown-repository');
  });

  describe('getClownData()', function() {

    it('should be a function', function(done) {
      expect(clownRepository.getClownData).to.be.a('function');
      done();
    });

  });
});
