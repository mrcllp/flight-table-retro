const port = 8000;


const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures',
  headers: {
    'X-RapidAPI-Key': 'df6be5e217mshd75b5d86b3f2e25p1be5b2jsn0b084e23a9d1',
    'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});