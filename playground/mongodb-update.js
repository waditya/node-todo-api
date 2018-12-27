const {MongoClient, ObjectID} = require('mongodb'); //Require using destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({_id : new ObjectID('5c2495e28cb5c9dbceed2664')},
 {$set: {
   completed: true
 }}, {returnOrginal: false}).then((result) => {
   console.log(result);
 });

  client.close(); //Closes connection with MongoDB Server
  console.log('MongoDB connection closed');
});
