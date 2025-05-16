const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/sequelize');
const port = process.env.PORT || 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const routes = require('./routes');

// Use routes
app.use('/', routes);

// Server starten
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
