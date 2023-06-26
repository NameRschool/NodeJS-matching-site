const mongoose = require('mongoose');

const campaignsSchema = mongoose.Schema({
    _id:{
      type: String, 
      required: false,
    },
    data: {
      type: String, 
      required: true,
    },
    destination:{
      type: String, 
      required: true,
    },
    datetime:{
      type: Date, 
      required: false,
    },
    managerName: {
      type: String, 
      required: true,
    },
  });
  
  module.exports = mongoose.model('campaigns', campaignsSchema);
