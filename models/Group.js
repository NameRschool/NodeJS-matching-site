const mongoose = require('mongoose');

const groupsSchema = mongoose.Schema({
    _id:{
      type: String, 
      required: false,
    },
    name: {
      type: String, 
      required: true,
    },
    destination:{
      type: String, 
      required: true,
    },
    info:{
      type: String, 
      required: true,
    }
  });
  
  module.exports = mongoose.model('groups', groupsSchema);
