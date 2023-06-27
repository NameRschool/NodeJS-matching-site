const fundRaiserRepo = require('../repos/fundRaiserRepo');
//BL
class FundRaiserService {
    async getAll() {
        try{
            return await fundRaiserRepo.getAll();
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async getById(id) {
        try {
            return await fundRaiserRepo.getById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async getByGroupId(id){
        try {
            return await fundRaiserRepo.getByGroupId(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async create(info) {
        try {
            return await fundRaiserRepo.create(info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async update(id,info) {
        try {
            return await fundRaiserRepo.update(id, info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async deleteById(id) {
        try {
            return await fundRaiserRepo.deleteById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
}

module.exports = new FundRaiserService();