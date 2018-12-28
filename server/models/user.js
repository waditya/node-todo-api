var mongoose = require('mongoose');

//Create a Mongoose model for ToDo

var User = mongoose.model('User', {
  //object to define various properties of model
  email: {
    type: String,
    required:true,
    minlength: 1,
    trim: true
  }
});

// Create instance
var newUser = new User({
  email: '   Aditya@hotmail.com   '
});

module.exports = {User};
