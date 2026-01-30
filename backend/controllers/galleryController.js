const Image = require('../models/Image');
const imagekit = require('../config/imagekit');

// @desc    Get all images
// @route   GET /api/gallery
// @access  Public
const getImages = async (req, res) => {
    try {
        const images = await Image.find().sort({ createdAt: -1 });
        res.json(images);
    } catch (error) {
        console.error('Error in getImages:', error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Upload an image
// @route   POST /api/gallery/upload
// @access  Private
const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { description } = req.body;

        const response = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            folder: '/ramayan_gallery',
        });

        const image = new Image({
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

// @desc    Update image description
// @route   PUT /api/gallery/:id
// @access  Private
const updateImage = async (req, res) => {
    try {
        const { description } = req.body;
        const image = await Image.findById(req.params.id);

        if (image) {
            image.description = description || image.description;
            const updatedImage = await image.save();
            res.json(updatedImage);
        } else {
            res.status(404).json({ message: 'Image not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete image
// @route   DELETE /api/gallery/:id
// @access  Private
const deleteImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);

        if (image) {
            // Delete from ImageKit
            if (image.fileId) {
                await imagekit.deleteFile(image.fileId);
            }

            // Delete from MongoDB
            await image.deleteOne();
            res.json({ message: 'Image removed' });
        } else {
            res.status(404).json({ message: 'Image not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getImages, uploadImage, updateImage, deleteImage };