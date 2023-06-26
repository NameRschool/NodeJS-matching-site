const groupRepo = require('../repos/groupRepo');
//BL
class GroupService {
    async getAll() {
        try{
            return await groupRepo.getAll();
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async getById(id) {
        try {
            return await groupRepo.getById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async create(info) {
        try {
            return await groupRepo.create(info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async update(id,info) {
        try {
            return await groupRepo.update(id, info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async deleteById(id) {
        try {
            return await groupRepo.deleteById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
}

module.exports = new GroupService();