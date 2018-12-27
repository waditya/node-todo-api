const {MongoClient, ObjectID} = require('mongodb'); //Require using destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5c20a0840625c4435c08f7e8')
  }, {
    $set: {
      name: 'Aditya D Wagholikar',
      age:29
    }
}, {
   returnOriginal: false
 }).then((result) => {
   console.log(result);
 });

 db.collection('Users').findOneAndUpdate({
   _id : new ObjectID('5c20a1c4d7dd7b27f4ef63e1')
 },{
   $inc: {
     age:-2
   }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  client.close(); //Closes connection with MongoDB Server

});
