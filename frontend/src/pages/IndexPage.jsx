// Import React Modules
import classNames from 'classnames';
import React, { useState } from 'react';
// Import Components Modules
import MovieList from '../components/MovieList';
// Import Data Modules
import MovieData from '../data/MovieData';

function IndexPage() {
  const [movie, setMovie] = useState(MovieData);

  return (
    <>
      <MovieList movies={movie} />
    </>
  )
}

export default IndexPage