const express = require('express');
const DonationsService = require('../js/services/donationService');
const donationsRouter = express.Router();




donationsRouter.post('/', async (req, res) => {
  try {
   
    const newDonor = new Donor(req.body);
    await newDonor.save();
    console.log('Donor saved successfully');
    res.json(newDonor);
  } catch (error) {
    console.error('Failed to save donor', error);
    res.status(500).json({ error: 'Failed to save donor' });
  }
});

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

donationsRouter.put('/:id', async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const update = req.body;
    await Donor.updateOne(query, update);
    console.log('Donor updated successfully');
    res.json({ message: 'Donor updated successfully' });
  } catch (error) {
    console.error('Failed to update donor', error);
    res.status(500).json({ error: 'Failed to update donor' });
  }
});

donationsRouter.delete('/:id', async (req, res) => {
  try {
    const query = { _id: req.params.id };
    await Donor.deleteOne(query);
    console.log('Donor deleted successfully');
    res.json({ message: 'Donor deleted successfully' });
  } catch (error) {
    console.error('Failed to delete donor', error);
    res.status(500).json({ error: 'Failed to delete donor' });
  }
});

module.exports = donationsRouter;




