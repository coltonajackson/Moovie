// Express Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// NodeJS Imports
const path = require('path');
const fs = require('fs');
const os = require('os');
// Custom Module Imports
const Logger = require('./modules/logger');
const Movie = require('./modules/movie');
// Declare objects from imported classes
const logger = new Logger();
// Request data from JSON
const movies_data = require('./data/movies.json');

// Set Logger to trigger on 'message' keyword
logger.on('message', (data) => console.log('Called Listener', data));

// Obtain list of movies from JSON
var movies_array = [];
movies_data.forEach(movie => {
  var mov = new Movie(movie['id'], movie['title'], movie['imgPath'], movie['rating'])
  movies_array.push(mov)
});

/*movies_array.forEach((movie, idx) => {
  console.log(idx, movie);
});*/

const app = express();
const port = process.env.PORT || 5000;

// Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Set routing for static pages to main root
const STATIC_ROOT = path.join(__dirname, 'public');
app.use(express.static(STATIC_ROOT));

// Routing to pages
app.get('', (req, res) => {
  let options = {
    title: 'Home Page',
    movies: movies_array
  };
  res.render('index', options);
});

app.use('/details', express.static(STATIC_ROOT));
app.get('/details/:id', (req, res) => {
  let options = {
    root: path.join(__dirname, 'public'),
    title: 'Details',
    movie: movies_array[req.params.id - 1]
  }
  res.render('details', options);
});

app.listen(port, () => {
  logger.log(`App listening on port ${port}`);
  /*setInterval(() => {
    var factor = Math.pow(1024, 3);
    logger.log(`Using ${((os.totalmem() - os.freemem()) / factor).toFixed(2)} GB out of ${(os.totalmem() / factor).toFixed(2)} GB.`)
  }, 1000);*/
});
