const Slider = require('../models/Slider');
const imagekit = require('../config/imagekit');

// @desc    Get all slider images
// @route   GET /api/slider
// @access  Public
const getSliderImages = async (req, res) => {
    try {
        const images = await Slider.find().sort({ createdAt: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Upload a slider image
// @route   POST /api/slider/upload
// @access  Private
const uploadSliderImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { description } = req.body;

        const response = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            folder: '/ramayan_slider',
        });

        const image = new Slider({
            url: response.url,
            description: description || 'No description',
            fileId: response.fileId,
        });

        const createdImage = await image.save();
        res.status(201).json(createdImage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete slider image
// @route   DELETE /api/slider/:id
// @access  Private
const deleteSliderImage = async (req, res) => {
    try {
        const image = await Slider.findById(req.params.id);

        if (image) {
            // Delete from ImageKit
            if (image.fileId) {
                await imagekit.deleteFile(image.fileId);
            }

            // Delete from MongoDB
            await image.deleteOne();
            res.json({ message: 'Slider image removed' });
        } else {
            res.status(404).json({ message: 'Slider image not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getSliderImages, uploadSliderImage, deleteSliderImage };
