const express = require('express');
const groupsRouter = express.Router();
const GroupService=require('../services/groupService');

groupsRouter.post('/', async (req, res) => {
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

groupsRouter.get('/', async (req, res) => {
 
  try {
    
    const groups = await GroupService.getAll();
    console.log('Retrieved groups:', groups);
    res.json(groups);
  } catch (error) {
    console.error('Failed to retrieve groups', error);
    res.status(500).json({ error: 'Failed to retrieve groups' });
  }
});

groupsRouter.put('/:id', async (req, res) => {
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

groupsRouter.delete('/:id', async (req, res) => {
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

