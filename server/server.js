// library imports
var express = require('express');
var bodyParser = require('body-parser');

//Local imports Using ES6 destructuring

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
