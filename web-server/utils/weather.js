const request = require('request');

const weather = (latitude, longitude, callback) => {
  const WEATHER_KEY = 'fdf6dba545a1aabbb5447ba6c5016dfb';
  const url = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to get weather', undefined);
    } else {
      callback(undefined, `It's ${body.current.temperature} degree`);
    }
  });
};

module.exports = weather;
