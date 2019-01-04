var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: "mongodb://aditya:January1234@ds149404.mlab.com:49404/todo-app-api"
}
// mongoose.connect();
mongoose.connect(db.localhost || db.mlab);
// mongoose.connect(db.mlab);

module.exports = {
  mongoose
};
