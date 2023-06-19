const db = require('../models/connectToDatabase');
const fundRaiser = require('../models/fundRaiser')

class FundRaiserRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        return await fundRaiser.find({}).limit(10);
    }
    async getById() {
        return await fundRaiser.find({age:5});
    }

}

module.exports = new FundRaiserRepo();