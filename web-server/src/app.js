const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('../utils/geocode');
const weather = require('../utils/weather');

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

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    message: 'Help article not found',
    name: 'Mati',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Please provide an address',
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    weather(latitude, longitude, (error, weatherData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        weather: weatherData,
        location,
        address: req.query.address,
      });
    });
  });
  //   res.send({
  //     location: 'Buenos Aires',
  //     forecast: 'It is raining',
  //     address: req.query.address,
  //     name: 'Mati',
  //   });
});

// app.get('/products', (req, res) => {
//   if (!req.query.search) {
//     return res.send({
//       error: 'Please provide a search term',
//     });
//   }
//   console.log(req.query.search);
//   res.send({
//     products: [],
//   });
// });

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    message: 'Page not found',
    name: 'Mati',
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
