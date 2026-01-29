const Volunteer = require('../models/Volunteer');
const { sendWelcomeSMS } = require('../utils/smsSender');

const registerVolunteer = async (req, res) => {
    try {
        const { name, fathersName, email, phone, address, district, state, message } = req.body;
        
        const volunteer = await Volunteer.create({
            name,
            fathersName,
            email,
            phone,
            address,
            district,
            state,
            message
        });

        if (volunteer) {
            // Send Welcome SMS
            await sendWelcomeSMS(volunteer.name, volunteer.phone);

            res.status(201).json({
                _id: volunteer._id,
                name: volunteer.name,
                email: volunteer.email,
                message: "Registration successful"
            });
        } else {
            res.status(400).json({ message: 'Invalid volunteer data' });
        }
    } catch (error) {
        console.error('Error in registerVolunteer:', error);
        res.status(500).json({ message: error.message });
    }
};

const testSmsSend = async (req, res) => {
    try {
        if (process.env.NODE_ENV !== 'development') {
            return res.status(403).json({ message: 'Not allowed in production' });
        }
        const phone = req.query.phone || req.body?.phone;
        const name = req.query.name || req.body?.name || 'Tester';
        if (!phone) {
            return res.status(400).json({ message: 'Phone is required' });
        }
        const result = await sendWelcomeSMS(name, phone);
        return res.json({ requestedPhone: phone, result });
    } catch (error) {
        console.error('Error in testSmsSend:', error);
        res.status(500).json({ message: error.message });
    }
};

const getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find().sort({ createdAt: -1 });
        res.json(volunteers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerVolunteer, testSmsSend, getVolunteers };
