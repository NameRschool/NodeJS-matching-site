const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3008;
 

const groupsRouter = require('./routers/groups');
const donationsRouter = require('./routers/donations');
const fundRaisersRouter = require('./routers/fundRaisers');
const campaignsRouter = require('./routers/campaigns');

app.use(express.json());

     app.get('/', (req, res, next) => {
         res.send('Hi to the campaign!');
       });
    app.use('/campaigns', campaignsRouter);
    app.use('/groups', groupsRouter);
    app.use('/donations', donationsRouter);
    app.use('/fundRaisers',fundRaisersRouter);


    app.use((req, res, next) => {
      res.status(404).json({ error: 'Not Found' });
    });
    app.listen(port, () => {
      console.log(`I am up in http://127.0.0.1:${port}`);
    });


  
