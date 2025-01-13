const Flower = require('../models/FlowerModels');


// Get all flowers
const getFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.status(200).json(flowers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flowers' });
  }
};

// Create a new flower
const createFlower = async (req, res) => {
    const { name, description, price, category, image } = req.body;
  
    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      const newFlower = new Flower({ name, description, price, category, image });
      await newFlower.save();
      res.status(201).json(newFlower);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create flower' });
    }
  };
  
// Delete a flower
const deleteFlower = async (req, res) => {
  const { id } = req.params;

  try {
    const flower = await Flower.findByIdAndDelete(id);
    if (!flower) {
      return res.status(404).json({ error: 'Flower not found' });
    }
    res.status(200).json({ message: 'Flower deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete flower' });
  }
};

module.exports = {
  getFlowers,
  createFlower,
  deleteFlower,
};
