'use strict';

// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connectd to the MongoDB server');
  

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  //Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Greg',
  //   age: 35,
  //   location: 'Seattle, WA'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to connect to MongoDB server', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});