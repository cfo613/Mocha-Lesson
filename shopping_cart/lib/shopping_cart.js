var ShoppingCart = function() {
  this.items = [];
  this.addItem = function(item) {
    this.items.push(item);
  };
  this.removeItem = function(item) {
    var index = this.items.indexOf(item);
    if ( index > -1 ) {
      this.items.splice(index,1);
      return true;
    }
    else {
      return false;
    }
  };
  this.checkout = function() {
    if ( this.items.length > 0 ) {
      var message = "You have purchased the following items:\n";
      message += this.items.join('\n');
      this.items = [];
    }
    else {
      var message = "You have nothing in your cart";
    }
    return message;
  };
}

module.exports = ShoppingCart;
