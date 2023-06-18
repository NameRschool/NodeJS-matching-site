const mongoose = require('mongoose');

const fundRaiserSchema = mongoose.Schema({
    id:String,
    groupsId:String,
    name: String,
    email: String,
    destination: String,
    TotalSoFar:String,
    info:String

  });

  module.exports = mongoose.model('fundRaisers', fundRaiserSchema);
