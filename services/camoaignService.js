const campaignRepo = require('../repos/campaignRepo')
//BL
class CampaignService {
    async getAll() {
        
        return await campaignRepo.getAll();
    }
}

module.exports = new CampaignService();