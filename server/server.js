var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//Create a Mongoose model for ToDo

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
  text: 'Apply for Jobs'
});


secondTodo.save().then((doc)=> {
  console.log(JSON.stringify(doc, undefined, 2));
}, (error) => {
  console.log('Unable to save todo');
});
