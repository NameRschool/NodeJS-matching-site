const mongoose = require('mongoose');

const groupsSchema = mongoose.Schema({
    id:String,
    campaignId:String,
    name: String,
    destination: String,
    info:String
  });

  module.exports = mongoose.model('groups', groupsSchema);
