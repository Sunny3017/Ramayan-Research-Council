const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Image = require('./models/Image');
const connectDB = require('./config/db');

dotenv.config();

const fs = require('fs');
const path = require('path');

const verifyImages = async () => {
    await connectDB();

    try {
        // Count images in galleryImages.js
        const galleryDataPath = path.join(__dirname, '../react-app/src/data/galleryImages.js');
        const fileContent = fs.readFileSync(galleryDataPath, 'utf8');
        const regex = /src:\s*["'](.*?)["'],\s*title:\s*["']([\s\S]*?)["']\s*\}/g;
        let match;
        let jsCount = 0;
        const jsFilenames = new Set();
        const jsFilenameCounts = new Map();

        while ((match = regex.exec(fileContent)) !== null) {
            jsCount++;
            const src = match[1];
            const filename = path.basename(src);
            jsFilenames.add(filename);
            jsFilenameCounts.set(filename, (jsFilenameCounts.get(filename) || 0) + 1);
        }
        console.log(`Total images in galleryImages.js: ${jsCount}`);
        console.log(`Unique filenames in galleryImages.js: ${jsFilenames.size}`);
        
        // Check for duplicates in JS
        const jsDuplicates = [];
        jsFilenameCounts.forEach((count, filename) => {
            if (count > 1) {
                jsDuplicates.push({ filename, count });
            }
        });
        if (jsDuplicates.length > 0) {
            console.log(`Found ${jsDuplicates.length} duplicate filenames in galleryImages.js:`);
            jsDuplicates.forEach(d => console.log(`- ${d.filename} (${d.count} times)`));
        }

        // Count images in DB
        const allImages = await Image.find({});
        console.log(`Total images in DB: ${allImages.length}`);

        // Check for duplicates by URL
        const urlMap = new Map();
        const duplicates = [];

        allImages.forEach(img => {
            if (urlMap.has(img.url)) {
                duplicates.push({ original: urlMap.get(img.url), duplicate: img });
            } else {
                urlMap.set(img.url, img);
            }
        });

        if (duplicates.length > 0) {
            console.log(`Found ${duplicates.length} duplicate images by URL.`);
            duplicates.forEach(d => {
                console.log(`Duplicate: ${d.duplicate.url} (ID: ${d.duplicate._id})`);
            });
        } else {
            console.log('No duplicates found by URL.');
        }

        // Check for duplicates by File ID
        const fileIdMap = new Map();
        const fileIdDuplicates = [];

        allImages.forEach(img => {
            if (fileIdMap.has(img.fileId)) {
                fileIdDuplicates.push({ original: fileIdMap.get(img.fileId), duplicate: img });
            } else {
                fileIdMap.set(img.fileId, img);
            }
        });

        if (fileIdDuplicates.length > 0) {
            console.log(`Found ${fileIdDuplicates.length} duplicate images by File ID.`);
        } else {
            console.log('No duplicates found by File ID.');
        }

        // Find images in DB that are not in galleryImages.js
        console.log('\nAnalyzing extra images...');
        const extraImages = [];
        allImages.forEach(img => {
            if (img.url) {
                const parts = img.url.split('/');
                const lastPart = parts[parts.length - 1];
                const cleanName = lastPart.split('?')[0];
                
                if (!jsFilenames.has(cleanName)) {
                    extraImages.push({ name: cleanName, url: img.url, id: img._id });
                }
            }
        });

        console.log(`Found ${extraImages.length} images in DB that are NOT in galleryImages.js (by filename):`);
        extraImages.forEach(img => {
            console.log(`- ${img.name} (ID: ${img.id})`);
        });

        // Find images in galleryImages.js that are NOT in DB
        console.log('\nAnalyzing missing images...');
        const dbFilenames = new Set();
        allImages.forEach(img => {
            if (img.url) {
                const parts = img.url.split('/');
                const lastPart = parts[parts.length - 1];
                const cleanName = lastPart.split('?')[0];
                dbFilenames.add(cleanName);
            }
        });

        const missingImages = [];
        jsFilenames.forEach(name => {
            if (!dbFilenames.has(name)) {
                missingImages.push(name);
            }
        });

        console.log(`Found ${missingImages.length} images in galleryImages.js that are NOT in DB:`);
        missingImages.forEach(name => {
            console.log(`- ${name}`);
        });

        process.exit();
    } catch (error) {
        console.error('Error verifying images:', error);
        process.exit(1);
    }
};

verifyImages();
