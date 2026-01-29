const mongoose = require('mongoose');

const volunteerSchema = mongoose.Schema({
    name: { type: String, required: true },
    fathersName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    message: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
