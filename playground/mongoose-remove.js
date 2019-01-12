const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c2667cd69386468dc415dd5';

// Todo.remove to remove multiple recordss depends on match
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove

Todo.findByIdAndRemove({_id: '5c2f4eee8cb5c9dbceed87d6'}).then((todo)=>{
  console.log(todo);
});

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5c2f4eee8cb5c9dbceed87d6').then((todo)=>{
  console.log(todo);
});
