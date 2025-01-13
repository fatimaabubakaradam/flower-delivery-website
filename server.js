const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const flowerRoutes = require('./routes/flowerRoutes');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve images from uploads folder

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Flower App API!');
});

// Routes
app.use('/api/flowers', flowerRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT_NUMBER, () => {
      console.log(`Server running on port ${process.env.PORT_NUMBER}`);
    });
  })
  .catch((error) => console.error('MongoDB connection error:', error));
//   http://localhost:3000/api/flowers
