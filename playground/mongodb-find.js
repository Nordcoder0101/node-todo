'use strict';

// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connectd to the MongoDB server');

//   db.collection('Todos').find({
//     _id: new ObjectID('5b502218a4a2152cb9d69014')
//   }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('unable to fetch todos', err);
//   }
// )
  
// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

  db.collection('Users').find({
    name: 'Greg'
  }).toArray().then((docs) => {
    console.log('Todos with Greg as the name');
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('unable to fetch todos', err);
  });

  // db.close();
});