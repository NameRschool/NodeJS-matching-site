const groupRepo = require('../repos/groupRepo');
//BL
class GroupService {
    async getAll() {
        debugger
        return await groupRepo.getAll();
    }
    async createGroup(groupData) {
        return await groupRepo.createGroup(groupData);
      }
}

module.exports = new GroupService();