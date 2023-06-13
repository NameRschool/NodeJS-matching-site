const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
    name: String,
    email: String,
    
  });
   
  const campaignsSchema = new Schema({
    date: Date,
    destination: String,
    time: String,
    managerName: String
    
  });

  const groupsSchema = new Schema({
    name: String,
    destination: String,
    info:String
    
  });
  const Donor = mongoose.model('Donor', donorSchema);
  const Campaign = mongoose.model('Campaign', campaignsSchema);
  const Group = mongoose.model('Group', groupsSchema);
  
  module.exports = {
    Donor,
    Campaign,
    Group,
  };