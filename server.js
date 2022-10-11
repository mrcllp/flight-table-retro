const PORT = 5500;
const axios = require("axios").default;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());



const options = {
  method: 'GET',
  url: 'https://toronto-pearson-airport.p.rapidapi.com/arrivals/carousel/9',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});