const db = require('../models/connectToDatabase');
const Donations = require('../models/Donations')

class DonationsRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        return await Donations.find({}).limit(10);
    }
    async getById() {
        return await Donations.find({age:5});
    }

}

module.exports = new DonationsRepo();