const FundRaiserRepo = require('../../repos/fundRaiserRepo');
//BL
class FundRaiserService {
    async getAll() {
        return await FundRaiserRepo.getAll();
    }
}

module.exports = new FundRaiserService();