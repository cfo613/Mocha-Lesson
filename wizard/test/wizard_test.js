var assert = require('assert');
var Wizard = require('../lib/wizard');

var wizard;
describe("Wizard", function() {
  beforeEach(function() {
    wizard = new Wizard();
  });
  describe("#castSpell", function() {
    it('should allow wizard to cast a spell if less than 5', function() {
      var message = "Wizard has cast a spell"
      assert.equal(message, wizard.castSpell());
    });
    it('should not allow wizard to cast a spell if more than 5 have been cast', function() {
      var i = 0;
      while (i < 5) {
        wizard.castSpell();
        i ++
      }
      var message = "Wizard does not have any spells left!"
      assert.equal(message, wizard.castSpell());
    });
    it('should not allow a dead wizard to cast a spell', function() {
      var message = "Sorry - dead wizards cannot cast spells :("
      wizard.hit();
      wizard.hit();
      wizard.hit();
      assert.equal(message, wizard.castSpell());
    })
  });
  describe("#magic", function() {
    it("should allow wizard's spells to rengerate to 5 spells if less than 5", function() {
      var message1 = "Wizard already has 5 spells...silly!";
      var message2 = "Wizard spells have been regenerated to 5.";
      assert.equal(message1, wizard.magic());
      wizard.castSpell();
      assert.equal(message2, wizard.magic());
    });
  });
  describe("#hit", function() {
    it('should allow a wizard to be hit by a spell', function() {
      var message = "Wizard has been hit by a spell!";
      assert.equal(message, wizard.hit());
    });
    it('should allow a wizard to be hit a maximum of 2 times before he dies', function() {
      var message1 = "Wizard is dead!"
      var message2 = "Umm...he's dead already...stop it!"
      wizard.hit();
      wizard.hit();
      assert.equal(message1, wizard.hit());
      assert.equal(message2, wizard.hit());
    });
  });
  describe("#comeBack", function() {
    it('should allow dead wizard to be brought back from the dead', function() {
      var message = "The Wizard has come back to life! Ahhh!";
      wizard.hit();
      wizard.hit();
      wizard.hit();
      assert.equal(message, wizard.comeBack());
    });
    it('should not allow alive wizards to be brought back from the dead', function() {
      var message = "Why you trying to come back?";
      assert.equal(message, wizard.comeBack());
    });
  });
});
