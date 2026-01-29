const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Image = require('../models/Image');
const imagekit = require('../config/imagekit');
const connectDB = require('../config/db');

dotenv.config();

const seedGallery = async () => {
    await connectDB();

    const galleryDataPath = path.join(__dirname, '../../react-app/src/data/galleryImages.js');
    const publicGalleryPath = path.join(__dirname, '../../react-app/public/gallery');

    try {
        const fileContent = fs.readFileSync(galleryDataPath, 'utf8');
        
        // Regex to extract objects { src: "...", title: "..." }
        // Handling potential multiline and spacing
        const regex = /src:\s*["'](.*?)["'],\s*title:\s*["']([\s\S]*?)["']\s*\}/g;
        let match;
        const imagesToSeed = [];

        while ((match = regex.exec(fileContent)) !== null) {
            imagesToSeed.push({
                src: match[1],
                title: match[2]
            });
        }

        console.log(`Found ${imagesToSeed.length} images to seed.`);

        // Fetch all existing images to prevent re-uploading based on filename in URL
        const allImages = await Image.find({});
        const existingFilenames = new Set();
        allImages.forEach(img => {
            // Extract filename from URL (handling potential query params)
            // Example URL: https://ik.imagekit.io/user/ramayan_gallery/1.jpg
            if (img.url) {
                const parts = img.url.split('/');
                const lastPart = parts[parts.length - 1];
                const cleanName = lastPart.split('?')[0]; // Remove query params if any
                existingFilenames.add(cleanName);
            }
        });
        
        console.log(`Found ${existingFilenames.size} existing images in DB.`);

        for (const img of imagesToSeed) {
            const filename = path.basename(img.src);

            // Check if filename exists in DB (extracted from URL)
            if (existingFilenames.has(filename)) {
                console.log(`Skipping: ${filename} (Already in DB)`);
                continue;
            }

            // Resolve file path
            // src is like "../gallery/1.jpg", we need absolute path
            const filePath = path.join(publicGalleryPath, filename);

            if (fs.existsSync(filePath)) {
                console.log(`Uploading: ${filename}...`);
                
                try {
                    const fileBuffer = fs.readFileSync(filePath);
                    
                    const response = await imagekit.upload({
                        file: fileBuffer,
                        fileName: filename,
                        folder: '/ramayan_gallery',
                        useUniqueFileName: false // Try to keep original name to make matching easier
                    });

                    const newImage = new Image({
                        url: response.url,
                        description: img.title,
                        fileId: response.fileId,
                    });

                    await newImage.save();
                    console.log(`Saved: ${filename}`);
                    
                    // Add to set to prevent duplicates within this run if src is repeated
                    existingFilenames.add(filename);
                    
                } catch (uploadError) {
                    console.error(`Error uploading ${filename}:`, uploadError.message);
                }
            } else {
                console.warn(`File not found: ${filePath}`);
            }
        }

        console.log('Seeding completed.');
        process.exit();
    } catch (error) {
        console.error('Error seeding gallery:', error);
        process.exit(1);
    }
};

seedGallery();