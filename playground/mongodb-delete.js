'use strict';

// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connectd to the MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'clean closet'}).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').deleteMany({name: 'Greg'}).then((result) => {
    console.log(result)
  })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'clean closet'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b5024655603fc2cc4864278')})
  .then((result) => {
    console.log(JSON.stringify(results, undefined, 2));
  });


  // db.close();
});