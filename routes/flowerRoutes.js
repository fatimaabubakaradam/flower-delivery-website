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
