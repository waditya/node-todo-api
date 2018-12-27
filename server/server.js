var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//Create a Mongoose model for ToDo

var Todo = mongoose.model('Todo', {
  //object to define various properties of model
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// Create instance
var newTodo = new Todo({
  text: 'Cook dinner'
});

// Save the instance in database and handle promise returned
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (error)=> {
//   console.log('Unable to save todo');
// });

var secondTodo = new Todo({
  text: 'Update Regsitered Mobile number',
  completed: true,
  completedAt: 12272018
});


secondTodo.save().then((doc)=> {
  console.log('Saved the 2nd toDo', doc);
}, (error) => {
  console.log('Unable to save todo');
});
