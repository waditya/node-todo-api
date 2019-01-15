// library imports
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

//Local imports Using ES6 destructuring

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');



var app = express(); //Stores express application

// Setup parameters for HEROKU deployment
const port = process.env.PORT || 3000; // Set when App is running on Heroku

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
app.get('/todos/:id', (req, res)=> {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    console.log("404 Error - Invalid ID");
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{

    if(!todo){
      console.log("ID not found in database");
      return res.status(404).send();
    }
      console.log("ID found");
      res.send({todo});


  }).catch((error)=>{
    res.status(400).send();
  });
});

app.get('/todos', (req, res)=> {
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  })
});

app.delete('/todos/:id', (req, res)=>{
  var id = req.params.id; // get the id

  // validate the id -> not valid? rturn 404
  if(!ObjectID.isValid(id)){
    console.log("404 Error - Invalid ID");
    return res.status(404).send(); //Set the status of response to 404
  }

  Todo.findByIdAndRemove(id).then((todo)=>{

    if(!todo){
      console.log("ID not found in database");
      return res.status(404).send();
    }
      console.log("ID found and deleted");
      res.send({todo});
  }).catch((error)=>{
    res.status(400).send();
  });
});

app.listen(port, ()=> {
  console.log(`Started on port ${port}`);
}); //Basic Server Created

module.exports = {
  app
};
