const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    fileId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Slider', sliderSchema);
