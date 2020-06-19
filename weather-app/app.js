const geocode = require('./utils/geocode');
const weather = require('./utils/weather');
const fs = require('fs');

const input = process.argv[2];

if (!input) {
  console.log('Please input an address');
} else {
  geocode(input, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    weather(latitude, longitude, (error, weatherData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(weatherData);
    });
  });
}
