const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const printMediaRoutes = require('./routes/printMediaRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.use('/api/admin', authRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/slider', sliderRoutes);
app.use('/api/volunteer', volunteerRoutes);
app.use('/api/print-media', printMediaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log("Developer By Sunny Chaudary | Kashi Digital Labs | Makha laadle Meowwwwww")
});