const express = require('express');
const router = express.Router();
const { registerVolunteer, testSmsSend, getVolunteers } = require('../controllers/volunteerController');
const { protect } = require('../middleware/auth');

router.post('/', registerVolunteer);
router.get('/', protect, getVolunteers);
router.get('/test-sms', testSmsSend);

module.exports = router;
