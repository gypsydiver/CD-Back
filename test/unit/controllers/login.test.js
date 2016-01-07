require('sails-test-helper');
var assert = require('assert');

describe('AuthController', function() {

  describe('#login()', function() {
    it('should return code 200', function (done) {
      request.post('/login')
        .send({})
        .end(function(err, res) {
          if(err) return done(err);
          var success = res.body.success;

          assert(success.data.code === 200);
          return done();
        });
    });
  });

});
