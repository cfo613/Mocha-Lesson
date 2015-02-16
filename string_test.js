var assert = require('assert');

var string = "In a hole in the ground, there lived a hobbit."
describe('String', function(){
  describe('#indexOf', function(){
    it("should return 0 for 'In a hole'", function(){
      assert.equal(0, string.indexOf('In a hole'));
    });
    it("should return 5 for 'hole'", function(){
      assert.equal(5, string.indexOf('hole'));
    });
    it("should return 17 for 'ground'", function(){
      assert.equal(17, string.indexOf('ground'));
    });
    it("should return 39 for 'hobbit'", function(){
      assert.equal(39, string.indexOf('hobbit'));
    });
    it("should return -1 for 'Bilbo'", function(){
      assert.equal(-1, string.indexOf('Bilbo'));
    });
  });
});
