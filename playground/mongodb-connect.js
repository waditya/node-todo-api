const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unable to insert todo item', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Neha',
    age: 29,
    location: 'Pune'
  }, (err, result) => {
    if(err){
      return console.log('unable to insert user item', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id);
  });
  client.close(); //Closes connection with MongoDB Server
  console.log('MongoDB connection closed');
});
