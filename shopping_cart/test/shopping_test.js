var assert = require('assert');
var ShoppingCart = require('../lib/shopping_cart');

var SC;
var item;
describe('ShoppingCart', function() {
  beforeEach(function(){
    SC = new ShoppingCart();
  });
  describe('items', function() {
    it('should be empty when the Shopping Cart is initiated.', function() {
      assert.equal(0, SC.items.length);
    });
  });
  describe('#addItem', function() {
    it('should add a single item to the list of items', function() {
      var item = "item";
      SC.addItem(item);
      assert.equal(1, SC.items.length);
      assert.equal(item, SC.items[0]);
    });
  });
  describe('#removeItem', function() {
    beforeEach(function() {
      var item = "item";
      SC.addItem(item);
    });
    it('should return true if a value is removed', function() {
      var item = "item"
      assert.equal(true, SC.removeItem(item));
    });
    it('should remove an item if an item exists', function() {
      var item = "item"
      SC.removeItem(item);
      assert.equal(-1, SC.items.indexOf(item));
    });
    it('should return false if an item does not exist', function() {
      var item = "item2";
      assert.equal(false, SC.removeItem(item));
    });
  });
  var items = ["item1", "item2"]
  describe('#checkout', function() {
    beforeEach(function() {
      SC.addItem(items[0]);
      SC.addItem(items[1]);
    });
    it('should return a message with all the items in the shopping cart if cart is not empty', function() {
      var message = "You have purchased the following items:\n";
      message += items.join('\n')
      assert.equal(message, SC.checkout());
    });
    it('should empty the items in the shopping cart', function() {
      SC.checkout();
      assert.equal(0, SC.items.length);
    });
    it('should return a message indicating there are no items if cart is empty', function() {
      SC.checkout();
      var message = "You have nothing in your cart";
      assert.equal(message, SC.checkout());
    });
  });
});
