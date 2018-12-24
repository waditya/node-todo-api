const {MongoClient, ObjectID} = require('mongodb'); //Require using destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');
  db.collection('Todos').find().toArray().then((docs)=> {
    console.log(docs);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=> {
      console.log('Unable to fetch todos', err);
  });
  client.close(); //Closes connection with MongoDB Server
  console.log('MongoDB connection closed');
});
