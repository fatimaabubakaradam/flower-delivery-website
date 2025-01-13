const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }, 
});

const Flower = mongoose.model('Flower', flowerSchema);

module.exports = Flower;
