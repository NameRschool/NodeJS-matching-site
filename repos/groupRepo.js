const db = require('../models/connectToDatabase');
const group = require('../models/group');

class GroupRepo {
    constructor() {
        
        
        db.connect();
    }

    async getAll() {
        debugger
        return await group.find({});
    }
    async getById() {
        return await group.find({age:5});
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