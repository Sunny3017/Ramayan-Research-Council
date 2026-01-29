const PrintMedia = require('../models/PrintMedia');
const imagekit = require('../config/imagekit');

// @desc    Get all print media items
// @route   GET /api/print-media
// @access  Public
const getPrintMedia = async (req, res) => {
    try {
        // Sort by createdAt descending to show newest uploads first
        const items = await PrintMedia.find().sort({ createdAt: -1 }); 
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Upload a print media item
// @route   POST /api/print-media/upload
// @access  Private
const uploadPrintMedia = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { link, date } = req.body;

        const response = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            folder: '/ramayan_print_media',
        });

        const printMedia = new PrintMedia({
            link: link || '#',
            image: response.url,
            date: date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            alt: 'Print Media News',
            fileId: response.fileId,
        });

        const createdItem = await printMedia.save();
        res.status(201).json(createdItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete print media item
// @route   DELETE /api/print-media/:id
// @access  Private
const deletePrintMedia = async (req, res) => {
    try {
        const item = await PrintMedia.findById(req.params.id);

        if (item) {
            // Delete from ImageKit
            if (item.fileId) {
                await imagekit.deleteFile(item.fileId);
            }

            // Delete from MongoDB
            await item.deleteOne();
            res.json({ message: 'Item removed' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getPrintMedia, uploadPrintMedia, deletePrintMedia };
