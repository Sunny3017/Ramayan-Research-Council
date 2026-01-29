const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    fileId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Image', imageSchema);