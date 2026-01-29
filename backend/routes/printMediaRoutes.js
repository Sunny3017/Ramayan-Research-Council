const express = require('express');
const router = express.Router();
const { getPrintMedia, uploadPrintMedia, deletePrintMedia } = require('../controllers/printMediaController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/', getPrintMedia);
router.post('/upload', protect, upload.single('image'), uploadPrintMedia);
router.delete('/:id', protect, deletePrintMedia);

module.exports = router;
