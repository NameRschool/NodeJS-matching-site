const GroupRepo = require('../repos/groupRepo');
//BL
class GroupService {
    async getAll() {
        return await GroupRepo.getAll();
    }
    async createGroup(groupData) {
        return await GroupRepo.createGroup(groupData);

      }
}

module.exports = new GroupService();