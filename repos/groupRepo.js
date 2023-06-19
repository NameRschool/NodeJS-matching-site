const db = require('../models/connectToDatabase');
const Group = require('../models/Group')

class GroupRepo {
    constructor() {
        
        
        db.connect();
    }

    async getAll() {
        debugger
        return await Group.find({});
    }
    async getById() {
        return await Group.find({age:5});
    }
    async createGroup(groupData) {
        try {
          const group = new Group(groupData);
    
          const savedGroup = await group.save();
    
          return savedGroup;
        } catch (error) {
          console.error('Failed to create group', error);
          throw error;
        }
      }

}

module.exports = new GroupRepo();