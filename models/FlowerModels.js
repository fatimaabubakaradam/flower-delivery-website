const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const FlowerModelSchema = new Schema({
    name: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    }
});

const FlowerModel = mongoose.model('FlowerModel', FlowerModelSchema); 
module.exports = FlowerModel;
