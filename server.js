// server.js
const express = require('express');
const app = express();
const PORT = 3000;

let vehicleRoute = [];
let currentLocation = { lat: 37.7749, lng: -122.4194 }; // Starting point (San Francisco)

function simulateMovement() {
    // Simulate movement by slightly altering the coordinates
    currentLocation.lat += (Math.random() - 0.5) * 0.001;
    currentLocation.lng += (Math.random() - 0.5) * 0.001;
    vehicleRoute.push({ ...currentLocation });
}

app.get('/vehicle-location', (req, res) => {
    simulateMovement();
    res.json({ currentLocation, vehicleRoute });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
