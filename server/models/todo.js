var mongoose = require('mongoose');

// Create a Mongoose model for ToDo

var Todo = mongoose.model('Todo', {
  //object to define various properties of model
  text: {
    type: String,
    required:true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default:null
  }
});

module.exports = {Todo};
