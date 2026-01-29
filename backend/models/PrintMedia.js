const mongoose = require('mongoose');

const printMediaSchema = mongoose.Schema({
    link: {
        type: String,
        required: false, // Some items might not have a link
        default: '#'
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: String, // Storing as string to match current format "April 27, 2023", or could use Date object
        required: true,
    },
    alt: {
        type: String,
        required: false,
        default: 'News Image'
    },
    fileId: {
        type: String, // ImageKit file ID for deletion
        required: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('PrintMedia', printMediaSchema);
