const db = require('../models/connectToDatabase');
const Campaign = require('../models/Campaign')

class CampaignRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        debugger
        return await Campaign.find({});
}
    async getById() {
        return await Campaign.find({age:5});
    }

}

module.exports = new CampaignRepo();