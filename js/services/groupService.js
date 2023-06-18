const GroupRepo = require('../repos/groupRepo');
//BL
class GroupService {
    async getAll() {
        return await GroupRepo.getAll();
    }
}

module.exports = new GroupService();