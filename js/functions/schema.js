const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donorSchema = new Schema({
    name: String,
    email: String,
    
  });
   
  const campaignsSchema = new Schema({
    date: Date,
    destination: String,
    time: String
    
  });

  const groupsSchema = new Schema({
    name: String,
    destination: String,
    info:String
    
  });
  module.exports = {
    Donor: mongoose.model('Donor', donorSchema),
    Campaign: mongoose.model('Campaign', campaignsSchema),
    Group: mongoose.model('Group', groupsSchema),
  };