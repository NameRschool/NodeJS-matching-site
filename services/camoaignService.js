const CampaignRepo = require('../../repos/campaignRepo')
//BL
class CampaignService {
    async getAll() {
        debugger
        return await CampaignRepo.getAll();
    }
}

module.exports = new CampaignService();