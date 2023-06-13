const express = require('express');
const app = express();
const port = 3000;
const connectToDatabase = require('./functions/connectToDatabase');

const campaignsRouter = require('./routers/campaignsRouter');
const groupsRouter = require('./routers/groupsRouter');
const donorsRouter = require('./routers/donorsRouter');

connectToDatabase()
  .then(() => {
    app.get('/', (req, res) => {
        res.send('Hi to the campaign!');
      });
    app.use('/campaigns', campaignsRouter);
    app.use('/groups', groupsRouter);
    app.use('/donors', donorsRouter);

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

  
