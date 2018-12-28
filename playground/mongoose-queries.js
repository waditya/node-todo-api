const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c2667cd69386468dc415dd5';

if (!ObjectID.isValid(id)){
  console.log('Id not valid!');
}

// Todo.find({
//   _id: id //Mongoose converst String into ObjectID
// }).then((todos)=> {
//   console.log('Todos :', todos);
// });
//
// Todo.findOne({
//   _id: id //Mongoose converst String into ObjectID
// }).then((todo)=> {
//   console.log('Todo :', todo);
// });

Todo.findById(id).then((todo)=> {
  if(!todo){
    return console.log('Id not found!');
  }
  console.log('Todo :', todo);
}).catch((error)=> {
  console.log(`Error is ${error}`);
});
