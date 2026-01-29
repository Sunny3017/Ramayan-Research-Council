const express = require('express');
const router = express.Router();
const { getSliderImages, uploadSliderImage, deleteSliderImage } = require('../controllers/sliderController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.route('/').get(getSliderImages);
router.route('/upload').post(protect, upload.single('image'), uploadSliderImage);
router.route('/:id').delete(protect, deleteSliderImage);

module.exports = router;
