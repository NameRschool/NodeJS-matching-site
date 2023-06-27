const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    _id:String,
    raiserId:String,
    amount:Number,
    dateTime:Date,
    donor:String
  });

  module.exports = mongoose.model('donations', donationSchema);
