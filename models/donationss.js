const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    id:String,
    raiserId:String,
    amount:String,
    dateTime:String,
    donor:String
  });

  module.exports = mongoose.model('donations', donationSchema);
