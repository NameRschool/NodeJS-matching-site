const express = require('express');
const app = express();

// Import the routers
const campaignsRouter = require('./routes/campaigns');
const groupsRouter = require('./routes/groups');
const donorsRouter = require('./routes/donors');

// Mount the routers to their respective URLs
app.use('/campaigns', campaignsRouter);
app.use('/groups', groupsRouter);
app.use('/donors', donorsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
