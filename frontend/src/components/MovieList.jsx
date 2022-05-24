// Import React Modules
import React from 'react'
// Import NPM Modules
import classNames from 'classnames';
// Import Component Modules
import MovieItem from './MovieItem';
// Import Contexts
import MovieContext from '../contexts/MovieContext';

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p>No Movies Yet</p>
  }

  return (
    <div className={classNames('d-flex', 'flex-wrap', 'justify-content-center', 'text-center')} id='movie-index'>
      {movies.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default MovieList