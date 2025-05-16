const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index');
});

// Welcome page
router.get('/welcome', (req, res) => {
  res.render('welcome');
});

// Selection page
router.get('/selection', (req, res) => {
  res.render('selection');
});

// Cart page
router.get('/cart', (req, res) => {
  res.render('cart');
});

// Payment page
router.get('/payment', (req, res) => {
  res.render('payment');
});

// Confirmation page
router.get('/confirmation', (req, res) => {
  res.render('confirmation');
});

module.exports = router; 