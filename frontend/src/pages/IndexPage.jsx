// Import React Modules
import React, { useState, useEffect } from 'react';
// Import Components Modules
import MovieList from '../components/MovieList';
// Import Data Modules
import MovieData from '../data/MovieData';

function IndexPage() {
  const [movie, setMovie] = useState(MovieData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MovieList movies={movie} />
    </>
  )
}

export default IndexPage