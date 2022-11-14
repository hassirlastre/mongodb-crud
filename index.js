const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/user');

//Settings
const app = express();
const port = process.env.PORT || 9000;

//Middlewares
app.use(express.json());
app.use('/api', userRoute);

//Route
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

//MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected to MongoDb Atlas'))
  .catch((error) => console.error(error));

//Server listening
app.listen(port, () => console.log('Server listening on port ' + port));
