const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const routes = require ('./routes/api');
require('dotenv').config(); 

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(routes);


const MONGO_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT_NUMBER || 3000;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (req, res) => {
  res.send('Flower website!');
});
