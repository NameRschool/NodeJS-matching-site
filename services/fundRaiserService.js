const fundRaiserRepo = require('../repos/fundRaiserRepo');
//BL
class FundRaiserService {
    async getAll() {
        return await fundRaiserRepo.getAll();
    }
}

module.exports = new FundRaiserService();