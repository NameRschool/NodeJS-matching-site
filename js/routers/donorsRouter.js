const { Donor, Campaign, Group } = require('./schema');
const express = require('express');
const donorsRouter = express.Router();

const createDonor = async (data) => {
  try {
    const newDonor = new Donor(data);
    await newDonor.save();
    console.log('Donor saved successfully');
    return newDonor;
  } catch (error) {
    console.error('Failed to save donor', error);
    throw error;
  }
};

const getDonors = async () => {
  try {
    const donors = await Donor.find();
    console.log('Retrieved donors:', donors);
    return donors;
  } catch (error) {
    console.error('Failed to retrieve donors', error);
    throw error;
  }
};

const updateDonor = async (query, update) => {
  try {
    await Donor.updateOne(query, update);
    console.log('Donor updated successfully');
  } catch (error) {
    console.error('Failed to update donor', error);
    throw error;
  }
};

const deleteDonor = async (query) => {
  try {
    await Donor.deleteOne(query);
    console.log('Donor deleted successfully');
  } catch (error) {
    console.error('Failed to delete donor', error);
    throw error;
  }
};

module.exports = {
  createDonor,
  getDonors,
  updateDonor,
  deleteDonor,
};
//const Donor = mongoose.model('Donor', donorSchema);
// // Route for getting donors and their contributions
// donorsRouter.get('/', (req, res) => {
//   // Retrieve campaign donors and contributions from the database
//   // ...
//   console.log("hi Donors")
//   const donors = database.getDonors(); // Replace with your actual database query or operation
//    // Return the campaign donors and contributions
//    res.json(donors);
//  });

//  donorsRouter.post('/', (req, res) => {
//   console.log("hi")

//   // Create a new donor
//   // Return response
// });

// donorsRouter.get('/:id', (req, res) => {
//   // Get a specific donor by ID
//   console.log("hi")
//   // Return response
// });



module.exports = donorsRouter;
