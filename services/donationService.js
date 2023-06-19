const donationsRepo = require('../repos/donationsRepo');
//BL
class DonationsService {
    async getAll() {
        return await donationsRepo.getAll();
    }
}

module.exports = new DonationsService();