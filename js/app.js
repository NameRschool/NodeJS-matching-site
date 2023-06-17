const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const connect = require('./models/connectToDatabase');

const campaignsRouter = require('./routers/campaignsRouter');
const groupsRouter = require('./routers/groupsRouter');
const donorsRouter = require('./routers/donorsRouter');
const mongoose = require('mongoose');

connect()
  .then(() => {
    app.get('/', (req, res) => {
        res.send('Hi to the campaign!');
      });
    //  app.get('/', (req, res) => {
    //      res.send('Hi to the campaign!');
    //    });
    app.use('/campaigns', campaignsRouter);
    app.use('/groups', groupsRouter);
    app.use('/donors', donorsRouter);

    app.listen(port, () => {
      console.log(`I am up in http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

  
