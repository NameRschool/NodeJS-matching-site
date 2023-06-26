const db = require('../models/connectToDatabase');
const campaign = require('../models/campaign')

class CampaignRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        try {
            return await campaign.find({})
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async getById(id) {
        try {
            return await campaign.findById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async create(info) {
        try {
            return await campaign.create(info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async update(id,info) {
        try {
            return await campaign.findByIdAndUpdate(id, info, {
                new: true,
            });
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async deleteById(id) {
        try {
            return await campaign.findByIdAndRemove(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

}

module.exports = new CampaignRepo();