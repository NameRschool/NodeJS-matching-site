const mongoose = require('mongoose');

const campaignsSchema = mongoose.Schema({
    id:String,
    date: Date,
    destination: String,
    datetime: String,
    datetime:String,
    managerName: String
  });
  
  module.exports = mongoose.model('campaigns', campaignsSchema);
