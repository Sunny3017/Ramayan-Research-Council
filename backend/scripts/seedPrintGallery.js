const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load env vars before requiring imagekit config
dotenv.config({ path: path.join(__dirname, '../.env') });

const PrintMedia = require('../models/PrintMedia');
const imagekit = require('../config/imagekit');
const connectDB = require('../config/db');


const printNewsData = [
  {
    id: 1,
    link: "https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27",
    image: "/divimages/news1.png",
    date: "April 27, 2023",
    alt: "News 1"
  },
  {
    id: 2,
    link: "https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27",
    image: "/divimages/news2.png",
    date: "April 23, 2023",
    alt: "News 2"
  },
  {
    id: 3,
    link: "https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27",
    image: "/divimages/news3.png",
    date: "April 23, 2023",
    alt: "News 3"
  },
  {
    id: 4,
    link: "#",
    image: "/divimages/news4.png",
    date: "April 07, 2022",
    alt: "News 4"
  },
  {
    id: 5,
    link: "#",
    image: "/divimages/news5.png",
    date: "February 04, 2023",
    alt: "News 5"
  },
  {
    id: 6,
    link: "#",
    image: "/divimages/news6.png",
    date: "July 07, 2023",
    alt: "News 6"
  },
  {
    id: 7,
    link: "#",
    image: "/divimages/news7.png",
    date: "April 06, 2023",
    alt: "News 7"
  },
  {
    id: 8,
    link: "#",
    image: "/divimages/news8.png",
    date: "August 07, 2023",
    alt: "News 8"
  },
  {
    id: 9,
    link: "#",
    image: "/divimages/news9.png",
    date: "April 07, 2022",
    alt: "News 9"
  },
  {
    id: 10,
    link: "#",
    image: "/divimages/news10.png",
    date: "February 04, 2023",
    alt: "News 10"
  },
  {
    id: 11,
    link: "#",
    image: "/divimages/news11.png",
    date: "July 07, 2023",
    alt: "News 11"
  },
  {
    id: 12,
    link: "#",
    image: "/divimages/news12.png",
    date: "April 06, 2023",
    alt: "News 12"
  },
  {
    id: 13,
    link: "#",
    image: "/divimages/news13.png",
    date: "August 07, 2023",
    alt: "News 13"
  },
  {
    id: 14,
    link: "#",
    image: "/divimages/news14.png",
    date: "April 07, 2022",
    alt: "News 14"
  },
  {
    id: 15,
    link: "#",
    image: "/divimages/news15.png",
    date: "February 04, 2023",
    alt: "News 15"
  },
  {
    id: 16,
    link: "#",
    image: "/divimages/news16.png",
    date: "July 07, 2023",
    alt: "News 16"
  },
  {
    id: 17,
    link: "#",
    image: "/divimages/news17.png",
    date: "April 06, 2023",
    alt: "News 17"
  },
  {
    id: 18,
    link: "#",
    image: "/divimages/news18.png",
    date: "August 07, 2023",
    alt: "News 18"
  },
  {
    id: 19,
    link: "#",
    image: "/divimages/news19.png",
    date: "April 07, 2022",
    alt: "News 19"
  },
  {
    id: 20,
    link: "#",
    image: "/divimages/news20.png",
    date: "February 04, 2023",
    alt: "News 20"
  },
  {
    id: 21,
    link: "#",
    image: "/divimages/news21.png",
    date: "July 07, 2023",
    alt: "News 21"
  },
  {
    id: 22,
    link: "#",
    image: "/divimages/news22.png",
    date: "February 14, 2023",
    alt: "News 22"
  },
  {
    id: 23,
    link: "#",
    image: "/divimages/news23.png",
    date: "August 07, 2023",
    alt: "News 23"
  },
  {
    id: 24,
    link: "#",
    image: "/divimages/news24.png",
    date: "February 14, 2022",
    alt: "News 24"
  },
  {
    id: 25,
    link: "#",
    image: "/divimages/news25.png",
    date: "June 19, 2023",
    alt: "News 25"
  },
  {
    id: 26,
    link: "#",
    image: "/divimages/news26.png",
    date: "April 28, 2023",
    alt: "News 26"
  },
  {
    id: 27,
    link: "#",
    image: "/divimages/news27.png",
    date: "March 28, 2023",
    alt: "News 27"
  },
  {
    id: 28,
    link: "#",
    image: "/divimages/news28.png",
    date: "November 11, 2023",
    alt: "News 28"
  },
  {
    id: 29,
    link: "https://www.facebook.com/watch/?v=1178554166862669",
    image: "/divimages/news29.png",
    date: "October 10, 2024",
    alt: "News 29"
  },
  {
    id: 30,
    link: "#",
    image: "/divimages/news30.png",
    date: "February 23, 2024",
    alt: "News 30"
  },
  {
    id: 31,
    link: "https://www.youtube.com/watch?v=Wem-9-_HVyw",
    image: "/divimages/news31.png",
    date: "February 23, 2023",
    alt: "News 31"
  },
  {
    id: 32,
    link: "https://www.youtube.com/watch?v=2dj9tWazCx0",
    image: "/divimages/news32.png",
    date: "October 10, 2023",
    alt: "News 32"
  }
];

const seedData = async () => {
    try {
        await connectDB();
        
        console.log('Clearing existing Print Media data...');
        await PrintMedia.deleteMany({});

        console.log('Starting migration...');
        
        for (const item of printNewsData) {
            // Construct absolute path to the image
            // Assuming the script is run from backend/scripts, and images are in react-app/public/divimages
            // We need to navigate: ../../react-app/public + item.image
            const imagePath = path.join(__dirname, '../../react-app/public', item.image);
            
            if (fs.existsSync(imagePath)) {
                console.log(`Uploading ${item.image}...`);
                const fileBuffer = fs.readFileSync(imagePath);
                
                const response = await imagekit.upload({
                    file: fileBuffer,
                    fileName: path.basename(item.image),
                    folder: '/ramayan_print_media',
                });

                await PrintMedia.create({
                    link: item.link,
                    image: response.url,
                    date: item.date,
                    alt: item.alt,
                    fileId: response.fileId
                });
                console.log(`Uploaded and saved: ${item.image}`);
            } else {
                console.warn(`File not found: ${imagePath}, skipping upload but saving entry with local path.`);
                 await PrintMedia.create({
                    link: item.link,
                    image: item.image, // Fallback to local path if file not found
                    date: item.date,
                    alt: item.alt
                });
            }
        }

        console.log('Migration completed successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
