const express = require('express');
const FundRaiserService = require('../services/fundRaiserService');
const fundRaiserRouter = express.Router();




fundRaiserRouter.get('/', async (req, res) => {
  try {
    const fundRaisers = await FundRaiserService.getAll();
    console.log('Retrieved fundRaisers:', fundRaisers);
    res.json(fundRaisers);
  } catch (error) {
    console.error('Failed to retrieve fundRaisers', error);
    res.status(500).json({ error: 'Failed to retrieve fundRaisers' });
  }
});


fundRaiserRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const fundRaiser = await FundRaiserService.getById(id);
    if (fundRaiser === null) {
      console.error('The id does not exist');
      return res.status(404).json({ error: 'The id does not exist' });
    }
    console.log('Retrieved fund Raiser:', fundRaiser);
    res.json(fundRaiser);
  } catch (error) {
    console.error('Failed to retrieve fundRaiser', error);
    res.status(500).json({ error: 'Failed to retrieve fundRaiser' });
  }
});

fundRaiserRouter.get('/groupId/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const fundRaiser = await FundRaiserService.getByGroupId(id);
    if (fundRaiser === null) {
      console.error('The id does not exist');
      return res.status(404).json({ error: 'The id does not exist' });
    }
    console.log('Retrieved fundRaiser:', fundRaiser);
    res.json(fundRaiser);
  } catch (error) {
    console.error('Failed to retrieve fund Raiser', error);
    res.status(500).json({ error: 'Failed to retrieve fund Raiser' });
  }
});

fundRaiserRouter.post('/', async (req, res) => {
  const { _id, groupsId, amonameunt, email, destination, TotalSoFar, info } = req.body;
  try {
    const existingfundRaiser = await FundRaiserService.getById(_id);
    if (existingfundRaiser) {
      console.error('fundRaiser with the provided ID already exists');
      return res.status(400).json({ error: 'fundRaiser with the provided ID already exists' });
    }
    const createdFundRaiser = await FundRaiserService.create({ _id, groupsId, amonameunt, email, destination, TotalSoFar, info });
    console.log('fundRaiser saved successfully');
    res.json(createdFundRaiser);
  } catch (error) {
    console.error('Failed to save fundRaiser', error);
    res.status(500).json({ error: 'Failed to save fundRaiser' });
  }
});

fundRaiserRouter.delete('/:id', async (req, res) => {
  try {
    const fundRaiserId = req.params.id;
    const fundRaiser = await FundRaiserService.getById(fundRaiserId);
    if (!fundRaiser) {
      console.error('The id does not exist');
      return res.status(400).json({ error: 'The id does not exist' });
    }
    await FundRaiserService.deleteById(fundRaiserId);
    console.log('fundRaiser deleted successfully');
    res.json({ message: 'fundRaiser deleted successfully' });
  } catch (error) {
    console.error('Failed to delete fundRaiser', error);
    res.status(500).json({ error: 'Failed to delete fundRaiser' });
  }
});

fundRaiserRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const {destination,TotalSoFar} = req.body.destination;
  try {
    const fundRaiser = await FundRaiserService.getById(id);
    if (!fundRaiser) {
      console.error('The id does not exist');
      return res.status(400).json({ error: 'The id does not exist' });
    }

    const updateFields = {};
    if (destination) {
      updateFields.destination = destination;
    }
    if (TotalSoFar) {
      updateFields.TotalSoFar = TotalSoFar;
    }

    const updatedFundRaiser = await FundRaiserService.update(id, updateFields);    console.log('updeted group:', updatedFundRaiser);
    res.json(updatedFundRaiser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = fundRaiserRouter;




