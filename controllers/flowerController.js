const FlowerModel = require('../models/FlowerModel');
const upload = require('../middlewares/multer'); // Multer middleware

// Get all flowers
const getAllFlowers = async (req, res) => {
  try {
    res.json(await FlowerModel.find());
  } catch {
    res.status(500).json({ error: 'Error fetching flowers' });
  }
};

// Get flower by ID
const getFlowerById = async (req, res) => {
  try {
    const flower = await FlowerModel.findById(req.params.id);
    flower ? res.json(flower) : res.status(404).json({ error: 'Not found' });
  } catch {
    res.status(500).json({ error: 'Error fetching flower' });
  }
};

// Create a new flower with image upload
const createFlower = async (req, res) => {
  // Use Multer middleware for image upload
  upload.single('image')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const { name, description, category, price } = req.body;
      const flowerImage = req.file ? req.file.path : ''; // Save image path to the database
      const flower = new FlowerModel({ name, description, category, price, image: flowerImage });
      res.status(201).json(await flower.save());
    } catch {
      res.status(500).json({ error: 'Error creating flower' });
    }
  });
};

// Update flower
const updateFlower = async (req, res) => {
  try {
    const flower = await FlowerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    flower ? res.json(flower) : res.status(404).json({ error: 'Not found' });
  } catch {
    res.status(500).json({ error: 'Error updating flower' });
  }
};

// Delete flower
const deleteFlower = async (req, res) => {
  try {
    const flower = await FlowerModel.findByIdAndDelete(req.params.id);
    flower ? res.json({ message: 'Deleted' }) : res.status(404).json({ error: 'Not found' });
  } catch {
    res.status(500).json({ error: 'Error deleting flower' });
  }
};

module.exports = { getAllFlowers, getFlowerById, createFlower, updateFlower, deleteFlower };
