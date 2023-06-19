const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
    groupsId:String,
    name: String,
    email: String,
    destination: String,
    info:String

  });
   
  const campaignsSchema = new Schema({
    date: Date,
    destination: String,
    datetime: String,
    managerName: String
    
  });

  const groupsSchema = new Schema({
    campaignId:String,
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