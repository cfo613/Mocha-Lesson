var Wizard = function() {
  this.spells = 5;
  this.hits = 0;
  this.dead = false;
  this.castSpell = function() {
    if (this.spells > 0 && this.dead === false) {
      var message = "Wizard has cast a spell";
      this.spells --;
    }
    if (this.spells <= 0) {
      var message = "Wizard does not have any spells left!"
    }
    if (this.dead === true) {
      var message = "Sorry - dead wizards cannot cast spells :("
    }
    return message;
  }
  this.magic = function() {
    if (this.spells !== 5 && this.dead === false) {
      this.spells = 5;
      var message = "Wizard spells have been regenerated to 5.";
    }
    else {
      var message = "Wizard already has 5 spells...silly!"
    }
    return message;
  }
  this.hit = function() {
    if (this.hits < 2) {
      var message = "Wizard has been hit by a spell!";
      this.hits ++;
    }
    else if (this.hits === 2) {
      var message = "Wizard is dead!"
      this.dead = true;
      this.hits ++;
    }
    else {
      var message = "Umm...he's dead already...stop it!";
      this.hits ++;
    }
    return message;
  }
  this.comeBack = function() {
    if (this.dead === true) {
      var message = "The Wizard has come back to life! Ahhh!";
      this.dead = false;
      this.hits = 0;
    }
    else {
      var message = "Why you trying to come back?";
    }
    return message;
  }
}

module.exports = Wizard;
