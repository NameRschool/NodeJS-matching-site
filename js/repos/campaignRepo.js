const db = require('../models/connectToDatabase');
const Campaign = require('../models/Campaign')

class CampaignRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        return await Campaign.find({}).limit(10);
    }
    async getById() {
        return await Campaign.find({age:5});
    }

}

module.exports = new CampaignRepo();