const { Donor, Campaign, Group } = require('./schema');
const express = require('express');
const groupsRouter = express.Router();

groupsRouter.post('/groups', async (req, res) => {
  try {
    const newGroup = new Group(req.body);
    await newGroup.save();
    console.log('Group saved successfully');
    res.json(newGroup);
  } catch (error) {
    console.error('Failed to save group', error);
    res.status(500).json({ error: 'Failed to save group' });
  }
});

groupsRouter.get('/groups', async (req, res) => {
  try {
    const groups = await Group.find();
    console.log('Retrieved groups:', groups);
    res.json(groups);
  } catch (error) {
    console.error('Failed to retrieve groups', error);
    res.status(500).json({ error: 'Failed to retrieve groups' });
  }
});

groupsRouter.put('/groups/:id', async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const update = req.body;
    await Group.updateOne(query, update);
    console.log('Group updated successfully');
    res.json({ message: 'Group updated successfully' });
  } catch (error) {
    console.error('Failed to update group', error);
    res.status(500).json({ error: 'Failed to update group' });
  }
});

groupsRouter.delete('/groups/:id', async (req, res) => {
  try {
    const query = { _id: req.params.id };
    await Group.deleteOne(query);
    console.log('Group deleted successfully');
    res.json({ message: 'Group deleted successfully' });
  } catch (error) {
    console.error('Failed to delete group', error);
    res.status(500).json({ error: 'Failed to delete group' });
  }
});

module.exports = groupsRouter;

