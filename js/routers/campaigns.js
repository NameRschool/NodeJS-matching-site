
const { Donor, Campaign, Group } = require('../models/schema');
const express = require('express');
const CampaignsRouter = express.Router();

CampaignsRouter.post('/', async (req, res) => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    console.log('Campaign saved successfully');
    res.json(newCampaign);
  } catch (error) {
    console.error('Failed to save campaign', error);
    res.status(500).json({ error: 'Failed to save campaign' });
  }
});

CampaignsRouter.get('/', async (req, res) => {
  
  try {
    const campaigns = await Campaign.find({},'date destination time');
    console.log('Retrieved campaigns:', campaigns);
    res.json(campaigns);
  } catch (error) {
    console.error('Failed to retrieve campaigns', error);
    res.status(500).json({ error: 'Failed to retrieve campaigns' });
  }
});

// CampaignsRouter.put('/campaigns/:id', async (req, res) => {
//   try {
//     const query = { _id: req.params.id };
//     const update = req.body;
//     await Campaign.updateOne(query, update);
//     console.log('Campaign updated successfully');
//     res.json({ message: 'Campaign updated successfully' });
//   } catch (error) {
//     console.error('Failed to update campaign', error);
//     res.status(500).json({ error: 'Failed to update campaign' });
//   }
// });
// Update campaign destination (for campaign managers)
CampaignsRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { destination } = req.body;

    const isManager = checkUserIsCampaignManager(req.user,campaign); 

    if (!isManager) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const campaign = await Campaign.findByIdAndUpdate(id, { destination }, { new: true });
    
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }

    console.log('Campaign updated successfully');
    res.json(campaign);
  } catch (error) {
    console.error('Failed to update campaign', error);
    res.status(500).json({ error: 'Failed to update campaign' });
  }
});

// Update donor's contribution destination
CampaignsRouter.put('/:id/contributions/:contributionId', async (req, res) => {
  try {
    const { id, contributionId } = req.params;
    const { destination } = req.body;

    // Check if the user is the donor who made the contribution (you need to implement the logic for this)
    const isDonor = checkUserIsDonor(req.user, contributionId); // Replace with your actual implementation

    if (!isDonor) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const campaign = await Campaign.findById(id);

    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }

    const contribution = campaign.contributions.id(contributionId);

    if (!contribution) {
      return res.status(404).json({ error: 'Contribution not found' });
    }

    contribution.destination = destination;
    await campaign.save();

    console.log('Contribution destination updated successfully');
    res.json(contribution);
  } catch (error) {
    console.error('Failed to update contribution destination', error);
    res.status(500).json({ error: 'Failed to update contribution destination' });
  }
});


CampaignsRouter.delete('/:id', async (req, res) => {
  try {
    const query = { _id: req.params.id };
    await Campaign.deleteOne(query);
    console.log('Campaign deleted successfully');
    res.json({ message: 'Campaign deleted successfully' });
  } catch (error) {
    console.error('Failed to delete campaign', error);
    res.status(500).json({ error: 'Failed to delete campaign' });
  }
});

module.exports = CampaignsRouter;

function checkUserIsCampaignManager(user, campaign) {
  const authenticatedUserName = user.name;
  const campaignManagerName = campaign.ManagerName;

  return authenticatedUserName === campaignManagerName;
}

function checkUserIsDonor(user, donor) {

  const authenticatedUserName = user.name;
  const donorName = donor.name;

  return authenticatedUserName === donorName;
}

function checkUserIsCampaignManager(user, campaign) {

  const authenticatedUserName = user.name;
  const campaignManagerName = campaign.managerName;

  return authenticatedUserName === campaignManagerName;
}

async function findByIdAndUpdate(campaignId, destination) {
  try {
    // Assuming you have the Campaign model imported and defined

    // Find the campaign by ID
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    // Update the campaign's destination
    campaign.destination = destination;

    // Save the updated campaign
    await campaign.save();

    return campaign;
  } catch (error) {
    console.error('Failed to update campaign:', error);
    throw error;
  }
}
