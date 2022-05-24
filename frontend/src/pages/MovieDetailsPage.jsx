// Import React Modules
import React from 'react';
import { useParams } from 'react-router-dom';
// Import NPM Modules
import classNames from 'classnames';
// Import Data Module
import MovieData from '../data/MovieData';
// Import Components
import MoviePoster from '../components/MoviePoster';
// Import Custom Scripts
import UseViewport from '../scripts/UseViewport';

function MovieDetailsPage() {
  const params = useParams();

  const { width, height } = UseViewport();
  const widthBreakpoint = 992;
  const heightBreakpoint = 1050;

  const movie = MovieData.find(x => x.id.toString() === params.id);
  const img = require(`../images/${movie.img}`);

  console.log(movie);
  console.log(`Width: ${width}; Height: ${height}`);
  console.log(`width > widthBreakpoint: ${width > widthBreakpoint}` + 
    '\n' + `height > heightBreakpoint: ${height > heightBreakpoint}`);

  const mobileClassNames = [classNames('d-block', 'd-lg-none mt-3'), classNames('mx-auto'),
    classNames('mx-auto', 'text-light', 'mt-2')];
  const desktopClassNames = [classNames('d-none', 'd-lg-flex', 'justify-content-center', 'mt-5'), 
    classNames('col-6', 'text-center'), classNames('col-6', 'ms-5', 'text-light')];

  return (
    <>
      <div className={classNames('container', 'max-width-80', 'my-3', 'pb-2')}>
        <div className={classNames('d-block', 'justify-content-center', 'text-center', 'bd-highlight')}>
          <h1 className={classNames('movie-title', 'display-3')}>{movie.title}</h1>
          <div className={classNames((width > widthBreakpoint) ? desktopClassNames[0] : mobileClassNames[0])}>
            <div className={classNames((width > widthBreakpoint) ? desktopClassNames[1] : mobileClassNames[1])} id='detail-img-rating'>
              <MoviePoster isIndexPage={false} img={img} movie={movie} />
            </div>
            <div className={((width > widthBreakpoint) ? desktopClassNames[2] : mobileClassNames[2])} id='movie-details'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quidem alias quasi 
                aperiam voluptatibus nobis natus porro eum quo nesciunt nemo, laudantium, totam 
                consequatur vero obcaecati facere pariatur soluta in eveniet? Laudantium, blanditiis 
                voluptate nostrum molestias, praesentium labore porro eius, consequatur rerum adipisci 
                molestiae error! Qui, quam nemo. Fugit, quo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetailsPage;