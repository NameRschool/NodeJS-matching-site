const db = require('../models/connectToDatabase');
const fundRaiser = require('../models/fundRaiser')

class FundRaiserRepo {
    constructor() {
        db.connect();
    }

    async getAll() {
        try {
            return await fundRaiser.find({})
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async getById(id) {
        try {
            return await fundRaiser.findById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

    async getByGroupId(id) {
        try {
            return await fundRaiser.find({groupsId:id});
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async create(info) {
        try {
            return await fundRaiser.create(info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
  
    async update(id,info) {
        try {
            return await fundRaiser.findByIdAndUpdate(id, info, {
                new: true,
            });
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
  
    async deleteById(id) {
        try {
            return await fundRaiser.findByIdAndRemove(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
}

module.exports = new FundRaiserRepo();