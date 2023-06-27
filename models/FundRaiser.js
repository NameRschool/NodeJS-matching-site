const mongoose = require('mongoose');

const fundRaiserSchema = mongoose.Schema({
    _id:String,
    groupsId:String,
    name: String,
    email: String,
    destination: String,
    TotalSoFar:String,
    info:String

  });

  module.exports = mongoose.model('fundRaisers', fundRaiserSchema);
