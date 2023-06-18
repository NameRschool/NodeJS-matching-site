const mongoose = require('mongoose');


const connect = async () => {
  // await mongoose.connect(process.env.DATABASE_URL)
  // console.log('Connected to MongoDB');

  try {
    await mongoose.connect('mongodb+srv://rf:MYpasswordDB@homecluster.dfm7sgf.mongodb.net/nodeJSprojectDB ',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Failed to disconnect from MongoDB', error);
    throw error;
  }
};


module.exports = { connect, disconnect }


