const express = require('express');
const router = express.Router();
const {
  getFlowers,
  getFlowerById, 
  createFlower,
  deleteFlower,
} = require('../controllers/flowerController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.get('/', getFlowers);
router.get('/:id', getFlowerById); 
router.post('/', upload.single('image'), createFlower);
router.delete('/:id', deleteFlower);

module.exports = router;


router.post("/flowers", upload.single("image"), async (req, res) => {
  try {
    console.log("Received request:", req.body);
    console.log("Uploaded file:", req.file); // Debugging file upload

    if (!req.file) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    const { name, category, price, description } = req.body;
    if (!name || !category || !price || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newFlower = new Flower({
      name,
      category,
      price,
      description,
      imageUrl: req.file.path, // Ensure file storage path is correct
    });

    await newFlower.save();
    res.status(201).json({ message: "Flower added successfully!" });

  } catch (error) {
    console.error("Error adding flower:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// http://localhost:5000/api/flowers