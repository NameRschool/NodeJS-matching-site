const CampaignRepo = require('../repos/campaignRepo')
//BL
class CampaignService {
    async getAll() {
        return await CampaignRepo.getAll();
    }
}

module.exports = new CampaignService();