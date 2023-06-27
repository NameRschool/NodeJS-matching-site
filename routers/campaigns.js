const express = require('express');
const CampaignsRouter = express.Router();
const CampaignService = require('../services/camoaignService');

CampaignsRouter.get('/', async (req, res) => {
  try {
    const campaigns = await CampaignService.getAll();
    console.log('Retrieved campaigns:', campaigns);
    res.json(campaigns);
  } catch (error) {
    console.error('Failed to retrieve campaigns', error);
    res.status(500).json({ error: 'Failed to retrieve campaigns' });
  }
});

CampaignsRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const campaign = await CampaignService.getById(id);
    if (campaign === null) {
      console.error('The id does not exist');
      return res.status(404).json({ error: 'The id does not exist' });
    }
    console.log('Retrieved campaign:', campaign);
    res.json(campaign);
  } catch (error) {
    console.error('Failed to retrieve campaign', error);
    res.status(500).json({ error: 'Failed to retrieve campaign' });
  }
});



CampaignsRouter.post('/', async (req, res) => {
  const {
    _id,
    destination,
    data,
    datetime,
    managerName
  } = req.body;

  try {
    const existingCampaign = await CampaignService.getById(_id);
    if (existingCampaign) {
      console.error('Campaign with the provided ID already exists');
      return res.status(400).json({ error: 'Campaign with the provided ID already exists' });
    }
    const createdCampaign = await CampaignService.create({
      _id,
      destination,
      data,
      datetime,
      managerName
    });
    console.log('Campaign saved successfully');
    res.json(createdCampaign);
  } catch (error) {
    console.error('Failed to save campaign', error);
    res.status(500).json({ error: 'Failed to save campaign' });
  }
});

CampaignsRouter.delete('/:id', async (req, res) => {
  try {
    const campaignId = req.params.id;
    const campaign = await CampaignService.getById(campaignId);
    if (!campaign) {
      console.error('The id does not exist');
      return res.status(400).json({ error: 'The id does not exist' });
    }
    await CampaignService.deleteById(campaignId);
    console.log('Campaign deleted successfully');
    res.json({ message: 'Campaign deleted successfully' });
  } catch (error) {
    console.error('Failed to delete campaign', error);
    res.status(500).json({ error: 'Failed to delete campaign' });
  }
});


CampaignsRouter.put('/:user/:id', async (req, res) => {
  const user=req.params.user;
  const  id  = req.params.id;
  const  destination  = req.body.destination;
  try {
    const campaign = await CampaignService.getById(id);
    if (!campaign) {
      console.error('The id does not exist');
      return res.status(400).json({ error: 'The id does not exist' });
    }
    if(user!=campaign.managerName){
      console.error('Unauthorized: Only the manager can update the campaign');
      return res.status(401).json({ error: 'Unauthorized: Only the manager can update the campaign' });
    }
    const updatedCampaign = await CampaignService.update(id, { destination });
    res.json(updatedCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = CampaignsRouter;

