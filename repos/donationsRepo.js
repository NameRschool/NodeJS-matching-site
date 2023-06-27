const db = require('../models/connectToDatabase');
const donations = require('../models/donationss')

class DonationsRepo {
    constructor() {
        db.connect(); 
    }

    async getAll() {
        try {
            return await donations.find({})
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async getById(id) {
        try {
            return await donations.findById(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async getByraiserId(id) {
        try {
            return await donations.find({raiserId:id});
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    async create(info) {
        try {
            return await donations.create(info);
            
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
  
  
    async deleteById(id) {
        try {
            return await donations.findByIdAndRemove(id);
        } catch (error) {
            console.error(`error:${error}`)
        }
    }

}

module.exports = new DonationsRepo();