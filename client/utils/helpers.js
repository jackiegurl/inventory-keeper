var Firebase = require("firebase");

var fbRef = new Firebase("https://tradekeeper.firebaseio.com/");

var fireBaseUtils = {};

fireBaseUtils.setUsername = function(name) {
  var usersRef = new Firebase("https://tradekeeper.firebaseio.com/" + name);
  usersRef.set({
    username: name,
    closet: ''
  });
};

fireBaseUtils.pushInventory = function(name, input) {
  var usersRef = new Firebase("https://tradekeeper.firebaseio.com/" + name);
  var usersCloset = usersRef.child("closet");
  var newItem = usersCloset.push();

  newItem.set({
    inventory: input
  });
};

fireBaseUtils.updateData = function(name, updateKey, updateValue) {
  var usersRef = new Firebase("https://tradekeeper.firebaseio.com/" + name);
  var usersCloset = usersRef.child("closet");

  usersCloset.child(name).update({
    updateKey: updateValue
  });
};

module.exports = fireBaseUtils;