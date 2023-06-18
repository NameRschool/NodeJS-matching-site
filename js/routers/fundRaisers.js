const express = require('express');
const FundRaiserService = require('../services/fundRaiserService');
const fundRaiserRouter = express.Router();




fundRaiserRouter.post('/', async (req, res) => {
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

fundRaiserRouter.get('/', async (req, res) => {
  try {
    console.log("nn")
    const donors = await FundRaiserService.getAll();
    console.log('Retrieved donors:', donors);
    res.json(donors);
  } catch (error) {
    console.error('Failed to retrieve donors', error);
    res.status(500).json({ error: 'Failed to retrieve donors' });
  }
});

fundRaiserRouter.put('/:id', async (req, res) => {
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

fundRaiserRouter.delete('/:id', async (req, res) => {
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

module.exports = fundRaiserRouter;




