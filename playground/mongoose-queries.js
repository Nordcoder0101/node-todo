'use strict';

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todos');
const {User} = require ('./../server/models/user');

let id = '5b54fabb01e3f34bf049d1dd';

if (!ObjectID.isValid(id)) {
  console.log('ID not Valid');
}

Todo.find({
  _id: id,
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id,
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('ID not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User By Id not found');
  }
  console.log('User By ID', user);
});