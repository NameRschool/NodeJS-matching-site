const express = require('express');
const FundRaiserService=require('../services/fundRaiserService')
const DonationsService = require('../services/donationService');
const donationsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


donationsRouter.get('/', async (req, res) => {
  try {
    const donations = await DonationsService.getAll();
    console.log('Retrieved donations:', donations);
    res.json(donations);
  } catch (error) {
    console.error('Failed to retrieve donations', error);
    res.status(500).json({ error: 'Failed to retrieve donations' });
  }
});


donationsRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const donation = await DonationsService.getById(id);
    if (donation === null) {
      console.error('The id does not exist');
      return res.status(404).json({ error: 'The id does not exist' });
    }
    console.log('Retrieved donation:', donation);
    res.json(donation);
  } catch (error) {
    console.error('Failed to retrieve donation', error);
    res.status(500).json({ error: 'Failed to retrieve donation' });
  }
});

donationsRouter.get('/raiserId/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const donation = await DonationsService.getByraiserId(id);
    if (donation === null) {
      console.error('The id does not exist');
      return res.status(404).json({ error: 'The id does not exist' });
    }
    console.log('Retrieved donation:', donation);
    res.json(donation);
  } catch (error) {
    console.error('Failed to retrieve donation', error);
    res.status(500).json({ error: 'Failed to retrieve donation' });
  }
});

donationsRouter.post('/', async (req, res) => {
  const {  raiserId, amount,  donor } = req.body;
  const _id = uuidv4();;
  try {

    const existingdonation = await DonationsService.getById(_id);
    if (existingdonation) {
      console.error('donation with the provided ID already exists');
      return res.status(400).json({ error: 'donation with the provided ID already exists' });
    }
    const dateTime = new Date().toISOString();
    const createdDonation = await DonationsService.create({ _id, raiserId, amount, dateTime, donor });
    console.log(`Donation saved successfully:\n amount donation- ${createdDonation.amount}$\n from-${createdDonation.donor}`);
    const fundRaiser = await FundRaiserService.getById(raiserId);
    if (!fundRaiser) {
      console.error('The fund raiser does not exist');
      return res.status(400).json({ error: 'The fund raiser does not exist' });
    }
    const updatedTotalSoFar = parseInt(fundRaiser.TotalSoFar) + parseInt(amount);
    const updatedFundRaiser = await FundRaiserService.update(raiserId, { TotalSoFar: updatedTotalSoFar });
    console.log('Updated fund raiser:', updatedFundRaiser);
    res.json(createdDonation);
  } catch (error) {
    console.error('Failed to save donation', error);
    res.status(500).json({ error: 'Failed to save donation' });
  }
});

donationsRouter.delete('/:id', async (req, res) => {
  try {
    const donationId = req.params.id;
    const donation = await DonationsService.getById(donationId );
    if (!donation) {
      console.error('The id does not exist');
      return res.status(400).json({ error: 'The id does not exist' });
    }
    await DonationsService.deleteById(donationId);
    console.log('Donation deleted successfully');
    res.json({ message: 'Donation deleted successfully' });
  } catch (error) {
    console.error('Failed to delete donation', error);
    res.status(500).json({ error: 'Failed to delete donation' });
  }
});





module.exports = donationsRouter;




