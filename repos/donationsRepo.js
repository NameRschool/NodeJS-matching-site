const db = require('../models/connectToDatabase');
const donations = require('../models/donationss')

class DonationsRepo {
    constructor() {
        db.connect(); 
    }

    async getAll() {
        return await donations.find({}).limit(10);
    }
    async getById() {
        return await donations.find({age:5});
    }

}

module.exports = new DonationsRepo();