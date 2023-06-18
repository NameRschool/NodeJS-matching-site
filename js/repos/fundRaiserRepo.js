const db = require('../models/connectToDatabase');
const FundRaiser = require('../models/FundRaiser')

class FundRaiserRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        return await FundRaiser.find({}).limit(10);
    }
    async getById() {
        return await FundRaiser.find({age:5});
    }

}

module.exports = new FundRaiserRepo();