const express = require('express');
const bodyParser = require('body-parser');
const objectRoutes = require('./routes/objectRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/objects', objectRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});