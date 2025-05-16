const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/welcome', (req, res) => {
  res.render('welcome');
});

app.get('/selection', (req, res) => {
  res.render('selection');
});

app.get('/cart', (req, res) => {
  res.render('cart');
});

app.get('/payment', (req, res) => {
  res.render('payment');
});

app.get('/confirmation', (req, res) => {
  res.render('confirmation');
});

// Server starten
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
