const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const campaignsRouter = require('./routers/campaigns');
const groupsRouter = require('./routers/groups');
const donationsRouter = require('./routers/donations');
const fundRaisersRouter = require('./routers/fundRaisers');

     app.get('/', (req, res, next) => {
         res.send('Hi to the campaign!');
       });
    app.use('/campaigns', campaignsRouter);
    app.use('/groups', groupsRouter);
    app.use('/donations', donationsRouter);
    app.use('/fundRaisers',fundRaisersRouter);



    app.listen(port, () => {
      console.log(`I am up in http://127.0.0.1:${port}`);
    });


  
