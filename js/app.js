const express = require('express');
const app = express();

// Import the routers
const campaignsRouter = require('./campaignsRouter');
const groupsRouter = require('./groupsRouter');
const donorsRouter = require('./donorsRouter');

// Mount the routers to their respective URLs
app.use('/campaigns', campaignsRouter);
app.use('/groups', groupsRouter);
app.use('/donors', donorsRouter);

// Start the server
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'none'; font-src 'self' http://localhost:3000");
    next();
  });
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

  
