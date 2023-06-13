const express = require('express');
const donorsRouter = express.Router();

// Route for getting donors and their contributions
donorsRouter.get('/', (req, res) => {
  // Retrieve campaign donors and contributions from the database
  // ...
  console.log("hi Donors")
  const donors = database.getDonors(); // Replace with your actual database query or operation
   // Return the campaign donors and contributions
   res.json(donors);
 });

 donorsRouter.post('/', (req, res) => {
  console.log("hi")

  // Create a new donor
  // Return response
});

donorsRouter.get('/:id', (req, res) => {
  // Get a specific donor by ID
  console.log("hi")
  // Return response
});



module.exports = donorsRouter;
