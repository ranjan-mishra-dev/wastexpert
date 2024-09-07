const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data
const wasteCollectionDays = {
    'location1': [
        { title: 'Regular Collection', date: '2024-09-10' },
        { title: 'Recycling Collection', date: '2024-09-17' },
        { title: 'Hazardous Waste Collection', date: '2024-09-24' }
    ],
    'location2': [
        { title: 'Regular Collection', date: '2024-09-12' },
        { title: 'Recycling Collection', date: '2024-09-19' },
        { title: 'Hazardous Waste Collection', date: '2024-09-26' }
    ]
};

// Endpoint to get collection days based on location
app.get('/api/collection-schedule/:location', (req, res) => {
    const location = req.params.location;
    const collectionDays = wasteCollectionDays[location] || [];
    res.json(collectionDays);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
