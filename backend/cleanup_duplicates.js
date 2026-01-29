const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Image = require('./models/Image');
const connectDB = require('./config/db');

dotenv.config();

const cleanupDuplicates = async () => {
    await connectDB();

    try {
        // Load allowed filenames from galleryImages.js
        const galleryDataPath = path.join(__dirname, '../react-app/src/data/galleryImages.js');
        const fileContent = fs.readFileSync(galleryDataPath, 'utf8');
        const regex = /src:\s*["'](.*?)["'],\s*title:\s*["']([\s\S]*?)["']\s*\}/g;
        let match;
        const allowedFilenames = new Set();
        while ((match = regex.exec(fileContent)) !== null) {
            const src = match[1];
            const filename = path.basename(src);
            allowedFilenames.add(filename);
        }
        console.log(`Loaded ${allowedFilenames.size} allowed filenames from JS.`);

        // Fetch all images from DB
        const allImages = await Image.find({});
        console.log(`Total images in DB: ${allImages.length}`);

        // Identify images to delete
        const imagesToDelete = [];
        const imagesToKeep = [];

        allImages.forEach(img => {
            if (img.url) {
                const parts = img.url.split('/');
                const lastPart = parts[parts.length - 1];
                const cleanName = lastPart.split('?')[0];

                if (allowedFilenames.has(cleanName)) {
                    imagesToKeep.push(img);
                } else {
                    // Check if it's a special file like logo
                    if (cleanName.includes('logo')) {
                        console.log(`Skipping potential logo file: ${cleanName}`);
                        imagesToKeep.push(img);
                    } else {
                        imagesToDelete.push(img);
                    }
                }
            }
        });

        console.log(`Found ${imagesToDelete.length} images to delete (duplicates/extras).`);

        if (imagesToDelete.length > 0) {
            console.log('Deleting...');
            for (const img of imagesToDelete) {
                await Image.findByIdAndDelete(img._id);
                console.log(`Deleted: ${img.url} (ID: ${img._id})`);
            }
            console.log('Cleanup complete.');
        } else {
            console.log('No images to delete.');
        }

        process.exit();
    } catch (error) {
        console.error('Error cleaning up images:', error);
        process.exit(1);
    }
};

cleanupDuplicates();
