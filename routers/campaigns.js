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


CampaignsRouter.put('/:id', async (req, res) => {
  const  id  = req.params.id;
  const  destination  = req.body.destination;
  try {
    const campaign = await CampaignService.getById(id);
    if (!campaign) {
      console.error('The id does not exist');
      return res.status(400).json({ error: 'The id does not exist' });
    }
    const updatedCampaign = await CampaignService.update(id, { destination });
    res.json(updatedCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

CampaignsRouter.put('/:id/user', async (req, res) => {
  const { id } = req.params;
  const campaignInfo = req.body;
  const managerName = req.params.user;

  try {
    const campaign = await CampaignService.getById(id);
    if (campaign === null) {
      console.error('The id does not exist');
      return res.status(404).json({ error: 'The id does not exist' });
    }

    if (campaign.managerName !== managerName) {
      console.error('Unauthorized: Only the manager can update the campaign');
      return res.status(401).json({ error: 'Unauthorized: Only the manager can update the campaign' });
    }

    const updatedCampaign = await CampaignService.update(id, campaignInfo);
    res.json(updatedCampaign);
  } catch (error) {
    console.error('Failed to update campaign', error);
    res.status(500).json({ error: 'Failed to update campaign' });
  }
});


module.exports = CampaignsRouter;



// CampaignsRouter.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { destination } = req.body;

//     const isManager = checkUserIsCampaignManager(req.user, campaign);

//     if (!isManager) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const campaign = await Campaign.findByIdAndUpdate(id, { destination }, { new: true });

//     if (!campaign) {
//       return res.status(404).json({ error: 'Campaign not found' });
//     }

//     console.log('Campaign updated successfully');
//     res.json(campaign);
//   } catch (error) {
//     console.error('Failed to update campaign', error);
//     res.status(500).json({ error: 'Failed to update campaign' });
//   }
// });

// CampaignsRouter.put('/:id/contributions/:contributionId', async (req, res) => {
//   try {
//     const { id, contributionId } = req.params;
//     const { destination } = req.body;

//     const isDonor = checkUserIsDonor(req.user, contributionId); // Replace with your actual implementation

//     if (!isDonor) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const campaign = await Campaign.findById(id);

//     if (!campaign) {
//       return res.status(404).json({ error: 'Campaign not found' });
//     }

//     const contribution = campaign.contributions.id(contributionId);

//     if (!contribution) {
//       return res.status(404).json({ error: 'Contribution not found' });
//     }

//     contribution.destination = destination;
//     await campaign.save();

//     console.log('Contribution destination updated successfully');
//     res.json(contribution);
//   } catch (error) {
//     console.error('Failed to update contribution destination', error);
//     res.status(500).json({ error: 'Failed to update contribution destination' });
//   }
// });






// function checkUserIsCampaignManager(user, campaign) {
//   const authenticatedUserName = user.name;
//   const campaignManagerName = campaign.ManagerName;
//   return authenticatedUserName === campaignManagerName;
// }

// function checkUserIsDonor(user, donor) {
//   const authenticatedUserName = user.name;
//   const donorName = donor.name;
//   return authenticatedUserName === donorName;
// }

// function checkUserIsCampaignManager(user, campaign) {
//   const authenticatedUserName = user.name;
//   const campaignManagerName = campaign.managerName;
//   return authenticatedUserName === campaignManagerName;
// }

// async function findByIdAndUpdate(campaignId, destination) {
//   try {
//     const campaign = await Campaign.findById(campaignId);
//     if (!campaign) {
//       throw new Error('Campaign not found');
//     }
//     campaign.destination = destination;
//     await campaign.save();

//     return campaign;
//   } catch (error) {
//     console.error('Failed to update campaign:', error);
//     throw error;
//   }
// }
