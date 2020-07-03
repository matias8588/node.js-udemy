const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define path for express config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    name: 'Mati',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About page',
    name: 'Mati',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    message: 'Search for help',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Buenos Aires',
    forecast: 'It is raining',
    name: 'Mati',
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
