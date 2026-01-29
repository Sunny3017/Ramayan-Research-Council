const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const connectDB = require('./config/db');

// Route imports
const authRoutes = require('./routes/authRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const printMediaRoutes = require('./routes/printMediaRoutes');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Security: Set security headers
app.use(helmet());

// CORS Configuration: Allow ONLY the production domain
const corsOptions = {
    origin: 'https://www.ramayanresearchcouncil.com',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json({ limit: '10kb' })); // Limit body size

// Security: Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Security: Data sanitization against XSS
app.use(xss());

// Security: Prevent parameter pollution
app.use(hpp());

// Rate Limiting: Limit requests from same API
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 10 minutes'
});
app.use('/api', limiter);

// Mount routers
app.use('/api/admin', authRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/slider', sliderRoutes);
app.use('/api/volunteer', volunteerRoutes);
app.use('/api/print-media', printMediaRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Global Error Handler
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});
