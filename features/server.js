const express = require('express');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique file name
    }
});
const upload = multer({ storage: storage });

// Endpoint to handle report submissions
app.post('/api/report', upload.single('image'), (req, res) => {
    const { location, description } = req.body;
    const image = req.file ? req.file.filename : null; // Get uploaded image file name

    // Here you would typically save the report to a database
    console.log('New report received:', {
        location,
        description,
        image
    });

    // Respond back to the client
    res.json({ message: 'Report submitted successfully!' });
});

// Serve static files (for frontend)
app.use(express.static('public')); // Assuming your HTML file is in a 'public' directory

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
