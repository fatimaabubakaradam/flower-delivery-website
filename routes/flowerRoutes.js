
const express = require('express');
const router = express.Router();
const {
    getAllFlowers,
    getFlowerById,
    createFlower,
    updateFlower,
    deleteFlower
} = require('../controllers/flowerController');


    router.get('/', getAllFlowers);
    router.get('/:id', getFlowerById);
    router.post('/', createFlower);
    router.put('/:id', updateFlower);
    router.delete('/:id', deleteFlower);

module.exports = router;
