var assert = require('assert');
describe('Array', function() { // takes a string (typically whatever you're testing) and a callback
  describe('#length', function() { //common to have describe w/in a describe; in this case we're
  //describing a method in array; also typically use hash in front of method to indicate it's a method
    it('should return 0 when nothing has been added', function() { //it = actual test (one test per "it");
    // will typically have should to start the sentence; some ppl will say must
      assert.equal(0,[].length); //is basically saying assert that two values are equal; first param is
      //what you expect; second param is the actual value
      assert.notEqual(0,["something"].length);
      assert.notEqual(1,[].length);
      //note: will only display one pass in the results, but if any of these fail, it will fail
    });

    it('should return 1 when we add something', function() {
      assert.equal(1,["something"].length);
    });
  });
  describe("#push", function() {
    it('should add an element to the end of an array', function() {
      //given:
      var arr = [];
      var element = "element";
      //when:
      arr.push(element)
      //then:
      assert.equal(1, arr.length);
      assert.equal(element, arr[0]);
    });
  });
  var arr;
  var element;
  describe('#push', function() {
    beforeEach(function() { //beforeEach essentially handles the set-up for each test; typically put
      //whatever you want beforeEach test is run
      arr = [];
      element = "element";
      arr.push(element);
    });
    it('should add an element to the end of an array', function() {
      assert.equal(1, arr.length);
      assert.equal(element, arr[0]);
    });
    it('should allow us to add another element to the array', function() {
      arr.push(element);
      assert.equal(2, arr.length);
    });
  });
});

//results of running test with: assert.equal(0,[].length):
// Array
//     #length
//       ✓ should return 0 when nothing has been added
//
//
//   1 passing (7ms)

//results of running test with: assert.equal(0.["something"].length):
// Array
//     #length
//       1) should return 0 when nothing has been added
//
//
//   0 passing (5ms)
//   1 failing
//
//   1) Array #length should return 0 when nothing has been added:
//      AssertionError: 0 == 1
