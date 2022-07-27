const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true},
    name: { type: String, required: true, index: true},
    image: { type: String, required: true},
    popupName: { type: String, required: true},
    description: { type: String, required: true}
});

module.exports = mongoose.model('meals', mealsSchema);