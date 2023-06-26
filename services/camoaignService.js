const campaignRepo = require('../repos/campaignRepo')
//BL
class CampaignService {
    async getAll() {
        try{
            return await campaignRepo.getAll();
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async getById(id) {
        try {
            return await campaignRepo.getById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async create(info) {
        try {
            return await campaignRepo.create(info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async update(id,info) {
        try {
            return await campaignRepo.update(id, info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async deleteById(id) {
        try {
            return await campaignRepo.deleteById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

}

module.exports = new CampaignService();