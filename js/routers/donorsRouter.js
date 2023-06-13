const { Donor, Campaign, Group } = require('./../functions/schema');
const express = require('express');
const donorsRouter = express.Router();



donorsRouter.post('/', async (req, res) => {
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

donorsRouter.get('/', async (req, res) => {
  try {
    console.log("nn")
    const donors = await Group.find();
    console.log('Retrieved donors:', donors);
    res.json(donors);
  } catch (error) {
    console.error('Failed to retrieve donors', error);
    res.status(500).json({ error: 'Failed to retrieve donors' });
  }
});

donorsRouter.put('/:id', async (req, res) => {
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

donorsRouter.delete('/:id', async (req, res) => {
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

module.exports = donorsRouter;




