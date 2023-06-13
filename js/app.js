const express = require('express');
const app = express();
const port = 3000;
const connectToDatabase = require('./db');

const campaignsRouter = require('./routers/campaignsRouter');
const groupsRouter = require('./routers/groupsRouter');
const donorsRouter = require('./routers/donorsRouter');
connectToDatabase();


app.use('/campaigns', campaignsRouter);
app.use('/groups', groupsRouter);
app.use('/donors', donorsRouter);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

  
