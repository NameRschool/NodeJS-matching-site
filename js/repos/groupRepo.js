const db = require('../models/connectToDatabase');
const Group = require('../models/Group')

class GroupRepo {
    constructor() {
        
        
        db.connect();
    }

    async getAll() {
        
        return await Group.find({});
    }
    async getById() {
        return await Group.find({age:5});
    }

}

module.exports = new GroupRepo();