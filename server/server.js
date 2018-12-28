// library imports
var express = require('express');
var bodyParser = require('body-parser');

//Local imports Using ES6 destructuring

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

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
    res.send(error);
  })
  console.log(req.body);
});

// GET /todos/123r3458984

app.listen(3000, ()=> {
  console.log('Started on port 3000');
}); //Basic Server Created
