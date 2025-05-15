const express = require('express');
const app = express();
const port = 3000;

// Stel de view engine in op EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Maak de 'public' map beschikbaar voor statische bestanden
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Welkom bij FoodKiosk' });
});

app.get('/selection', (req, res) => {
  res.render('selection', { title: 'Kies je maaltijd' });
});

app.get('/cart', (req, res) => {
  res.render('cart', { title: 'Jouw winkelwagen' });
});

// Server starten
app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
