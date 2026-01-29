const express = require('express');
const router = express.Router();
const { getImages, uploadImage, updateImage, deleteImage } = require('../controllers/galleryController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.route('/').get(getImages);
router.route('/upload').post(protect, upload.single('image'), uploadImage);
router.route('/:id').put(protect, updateImage).delete(protect, deleteImage);

module.exports = router;