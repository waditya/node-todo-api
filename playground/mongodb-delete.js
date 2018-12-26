const {MongoClient, ObjectID} = require('mongodb'); //Require using destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

  // //deleteMany
  // db.collection('Todos').deleteMany({text:"Eat lunch"}).then((result)=>{
  //   console.log(result);
  // });
  //
  // //deleteOne
  //
  // db.collection('Todos').deleteOne({text:"Eat Lunch"}).then((result)=>{
  //   console.log(result);
  // });
  //
  // //findOneand Delete
  //
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // })

  //deleteMany for User
  db.collection('Users').deleteMany({name:"Amba"}).then((result)=> {
    console.log(JSON.stringify(result, undefined, 2));
  });

  db.collection('Users').findOneAndDelete({_id : new ObjectID('5c209c77bf678953a8f885aa')}).then((result)=>{
    console.log(JSON.stringify(result, undefined, 2));
  });

  client.close(); //Closes connection with MongoDB Server
  console.log('MongoDB connection closed');
});
