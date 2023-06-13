const express = require('express');
const app = express();
const port = 3000;

const campaignsRouter = require('./routers/campaignsRouter');
const groupsRouter = require('./routers/groupsRouter');
const donorsRouter = require('./routers/donorsRouter');


app.use('/campaigns', campaignsRouter);
app.use('/groups', groupsRouter);
app.use('/donors', donorsRouter);


app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});

  
