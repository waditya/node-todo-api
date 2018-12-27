var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//Create a Mongoose model for ToDo

// var Todo = mongoose.model('Todo', {
//   //object to define various properties of model
//   text: {
//     type: String,
//     required:true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default:null
//   }
// });

// // Create instance
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// Save the instance in database and handle promise returned
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (error)=> {
//   console.log('Unable to save todo');
// });

// var secondTodo = new Todo({
//   text: '   Apply for Full-time Jobs  '
// });
//
//
// secondTodo.save().then((doc)=> {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log('Unable to save todo');
// });

// User
// email - require it - trim it - set type - set min length of 1

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

newUser.save().then((doc)=>{
  console.log(JSON.stringify(doc, undefined, 2));
}, (error)=>{
  console.log(error);
  console.log('Unable to add new user');
});
