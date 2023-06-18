const mongoose = require('mongoose');

const campaignsSchema = new Schema({
    id:String,
    date: Date,
    destination: String,
    datetime: String,
    datetime:String,
    managerName: String
  });
  
  module.exports = mongoose.model('campaigns', campaignsSchema);
