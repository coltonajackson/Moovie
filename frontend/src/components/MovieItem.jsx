// Import React Modules
import React from 'react';
import { Link } from 'react-router-dom';
// Import NPM Modules
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
// Import Components
import MoviePoster from './MoviePoster';
// Import Contexts
import MovieContext from '../contexts/MovieContext';

function MovieItem({ item }) {
  const img = require(`../images/${item.img}`);
  return (
    <Link className={classNames('movie-link', 'm-2')} to={'/details/' + item.id + '/'}>
      <MoviePoster isIndexPage={true} img={img} movie={item} />
    </Link>
  )
}

export default MovieItem