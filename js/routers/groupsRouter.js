const { Donor, Campaign, Group } = require('./schema');
const express = require('express');
const groupsRouter = express.Router();

const createGroup = async (data) => {
  try {
    const newGroup = new Group(data);
    await newGroup.save();
    console.log('Group saved successfully');
    return newDonor;
  } catch (error) {
    console.error('Failed to save group', error);
    throw error;
  }
};

const getGroups = async () => {
  try {
    const groups = await Group.find();
    console.log('Retrieved group:', groups);
    return groups;
  } catch (error) {
    console.error('Failed to retrieve groups', error);
    throw error;
  }
};

const updateGroup = async (query, update) => {
  try {
    await Group.updateOne(query, update);
    console.log('Group updated successfully');
  } catch (error) {
    console.error('Failed to update group', error);
    throw error;
  }
};

const deleteGroup = async (query) => {
  try {
    await Donor.deleteOne(query);
    console.log('Group deleted successfully');
  } catch (error) {
    console.error('Failed to delete group', error);
    throw error;
  }
};

module.exports = {
  createGroup,
  getGroups,
  updateGroup,
  deleteGroup,
};

module.exports = groupsRouter;
