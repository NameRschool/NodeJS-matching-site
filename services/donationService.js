const donationsRepo = require('../repos/donationsRepo');
//BL
class DonationsService {
    async getAll() {
        try{
            return await donationsRepo.getAll();
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async getById(id) {
        try {
            return await donationsRepo.getById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async getByraiserId(id){
        try {
            return await donationsRepo.getByraiserId(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async create(info) {
        try {
            return await donationsRepo.create(info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async deleteById(id) {
        try {
            return await donationsRepo.deleteById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
}

module.exports = new DonationsService();