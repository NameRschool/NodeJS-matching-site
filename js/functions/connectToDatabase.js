const mongoose = require('mongoose');

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect('mongodb://localhost/mydatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
        resolve();
      })
      .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
        reject(error);
      });
  });
};

module.exports = connectToDatabase;



