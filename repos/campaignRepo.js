const db = require('../models/connectToDatabase');
const campaign = require('../models/campaign')

class CampaignRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        debugger
        return await campaign.find({});
}
    async getById() {
        return await campaign.find({age:5});
    }

}

module.exports = new CampaignRepo();