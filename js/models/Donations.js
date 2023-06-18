const mongoose = require('mongoose');

const donationSchema = new Schema({
    id:String,
    raiserId:String,
    amount:String,
    dateTime:String,
    donor:String
  });

  module.exports = mongoose.model('fundRaisers', fundRaiserSchema);
