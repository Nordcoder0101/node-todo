'use strict';

// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connectd to the MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b5274ab6466034a1389025c'),
  // }, {
  //   $set: {
  //     completed: true,
  //   },
  // }, {
  //   returnOriginal: false,
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b527d4b6466034a138904c9'),
  }, {
    $set: {
      name: 'Larry',
    },
    $inc: {
      age: 1,
    }, 
  }, {
    returnOriginal: false,
  }).then((result) => {
    console.log(result);
  });
  
  // db.close();
});