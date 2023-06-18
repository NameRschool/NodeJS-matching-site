const DonationsRepo = require('../repos/donationsRepo');
//BL
class DonationsService {
    async getAll() {
        return await DonationsRepo.getAll();
    }
}

module.exports = new DonationsService();