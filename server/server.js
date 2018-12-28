// library imports
var express = require('express');
var bodyParser = require('body-parser');

//Local imports Using ES6 destructuring

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const todos = [{
  text: 'First test todo'
}, {
  text: 'Second test todo'
}];

var app = express(); //Stores express application

// // COMBAK: Configure Middleware

app.use(bodyParser.json()) // Function returned by bodyParser.json() is the middleware

app.post('/todos', (req, res)=> {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=> {
    res.send(doc);
  }, (error)=> {
    res.status(400).send(error);
  })
  console.log(req.body);
});

// GET /todos/123r3458984
app.get('/todos', (req, res)=> {
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  })
});

app.listen(3001, ()=> {
  console.log('Started on port 3001');
}); //Basic Server Created

module.exports = {
  app
};
