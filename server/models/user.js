'use strict';

let mongoose = require('mongoose');

let User = mongoose.model('Users', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
});

module.exports = {User};