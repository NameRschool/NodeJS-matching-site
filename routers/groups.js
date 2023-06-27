const express = require('express');
const groupsRouter = express.Router();
const GroupService=require('../services/groupService');
const { v4: uuidv4 } = require('uuid');


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

groupsRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const group = await GroupService.getById(id);
    if (group === null) {
      console.error('The id does not exist');
      return res.status(404).json({ error: 'The id does not exist' });
    }
    console.log('Retrieved group:', group);
    res.json(group);
  } catch (error) {
    console.error('Failed to retrieve group', error);
    res.status(500).json({ error: 'Failed to retrieve group' });
  }
});



groupsRouter.put('/:id', async (req, res) => {
  const  id  = req.params.id;
  const  destination  = req.body.destination;
  try {
    const group = await GroupService.getById(id);
    if (!group) {
      console.error('The id does not exist');
      return res.status(400).json({ error: 'The id does not exist' });
    }
    const updatedGroup = await GroupService.update(id, { destination });
    console.log('updeted group:', updatedGroup);
    res.json(updatedGroup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
groupsRouter.post('/', async (req, res) => {
  const {
    name,
    destination,
    info
  } = req.body;
  const _id = uuidv4();
  try {
    const existinggroup = await GroupService.getById(_id);
    if (existinggroup) {
      console.error('group with the provided ID already exists');
      return res.status(400).json({ error: 'group with the provided ID already exists' });
    }
    
    const createdGroup = await GroupService.create({
      _id,
      name,
      destination,
      info
    });
    console.log('group saved successfully',createdGroup);
    res.json(createdGroup);
  } catch (error) {
    console.error('Failed to save group', error);
    res.status(500).json({ error: 'Failed to save group' });
  }
});

groupsRouter.delete('/:id', async (req, res) => {
  try {
    const groupId = req.params.id;
    const group = await groupService.getById(groupId);
    if (!group) {
      console.error('The id does not exist');
      return res.status(400).json({ error: 'The id does not exist' });
    }
    await groupService.deleteById(groupId);
    console.log('Group deleted successfully');
    res.json({ message: 'Group deleted successfully' });
  } catch (error) {
    console.error('Failed to delete group', error);
    res.status(500).json({ error: 'Failed to delete group' });
  }
});

module.exports = groupsRouter;



















