// Import Environment Variables
require('dotenv').config();
// Express Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// NodeJS Imports
const path = require('path');
// NPM Package Imports
const axios = require('axios');
// Custom Module Imports
const Logger = require('./modules/logger');
const Movie = require('./modules/movie');
// Declare objects from imported classes
const logger = new Logger();

// Obtain list of movies from Django REST API
let getUpdatedMoviesAPI = async () => {
  // Request data from API
  let api = axios.create({
    baseURL: 'http://localhost:8000/api',
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD
    }
  });
}

let getUpdatedMoviesJSON = () => {
  return require('./data/json/movies.json');
}

// Set Auth Token from API Token Generator
// const AUTH_TOKEN = process.env.API_KEY;

const app = express();

// Set Logger to trigger on 'message' keyword
logger.on('data', (data) => console.log('Called Listener', data));

// Set port to Environment Port or 5000
const port = process.env.PORT || 5000;

// Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Set routing for static pages to main root
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'data')));

// Routing to pages
app.get('', (req, res) => {
  // API Get Request
  // getUpdatedMoviesAPI().then(data => {
  //   let movies_data = data['results'];
  //   let movies_array = new Array();
  //   const movies = Object.entries(movies_data);
  //   for (const [key, value] of movies) {
  //     movies_array.push(new Movie(value.id, value.title, value.imgPath, value.rating));
  //   }
  //   let options = {
  //     title: 'Home Page',
  //     movies: movies_array
  //   };
  //   res.render('index', options);
  // });
  // JSON Data File Request
  let movies_data = getUpdatedMoviesJSON();
    let movies_array = new Array();
    const movies = Object.entries(movies_data);
    for (const [key, value] of movies) {
      movies_array.push(new Movie(value.id, value.title, value.imgPath, value.rating));
    }
    let options = {
      title: 'Home Page',
      movies: movies_array
    };
    res.render('index', options);
});

app.use('/details', express.static(path.join(__dirname, 'public')));
app.use('/details', express.static(path.join(__dirname, 'data')));
app.get('/details/:id', (req, res) => {
  // API Get Request
  // getUpdatedMoviesAPI().then(data => {
  //   let movies_data = data['results'];
  //   let movies_array = new Array();
  //   const movies = Object.entries(movies_data);
  //   for (const [key, value] of movies) {
  //     movies_array.push(new Movie(value.id, value.title, value.imgPath, value.rating));
  //   }
  //   let mov = movies_array.find(m => m.id === parseInt(req.params.id));
  //   if (mov !== undefined) {
  //     let options = {
  //       root: path.join(__dirname, 'public'),
  //       title: 'Details',
  //       movie: mov
  //     };
  //     res.render('details', options);
  //   } else {
  //     res.type('html').render('error', { title: 'Error', code: '404', message: 'File not found' });
  //   }
  // });
  // JSON Data File Request
  let movies_data = getUpdatedMoviesJSON();
    let movies_array = new Array();
    const movies = Object.entries(movies_data);
    for (const [key, value] of movies) {
      movies_array.push(new Movie(value.id, value.title, value.imgPath, value.rating));
    }
    let mov = movies_array.find(m => m.id === parseInt(req.params.id));
    if (mov !== undefined) {
      let options = {
        root: path.join(__dirname, 'public'),
        title: 'Details',
        movie: mov
      };
      res.render('details', options);
    } else {
      res.type('html').render('error', { title: 'Error', code: '404', message: 'File not found' });
    }
});

app.listen(port, () => {
  logger.log(`App listening on port ${port}`);
});