// Import React Modules
import React from 'react';
// Import NPM Modules
import classNames from 'classnames';
// Import Custon Scripts
import UseViewport from '../scripts/UseViewport';

function MoviePoster({isIndexPage, img, movie}) {
  const { width, height } = UseViewport();
  const widthBreakpoint = 992;
  const heightBreakpoint = 1050;

  return isIndexPage ? (
      <div className={classNames((width <= widthBreakpoint && height <= heightBreakpoint)
        ? 'image-container-mobile' : 'image-container', 'bg-light', 'rounded')} id={movie.id}>
        <img className={classNames('image', 'rounded')} src={img.substring(1)} alt={movie.title} />
        <div className={classNames('overlay', 'overlay-fade', 'd-flex', 'align-items-center', 
          'row', 'rounded', width <= widthBreakpoint && 'mt-auto')}>
          <div className='col'>
            <h1 className={classNames('overlay-text', 'movie-title')}>{movie.title}</h1>
            <div className={classNames('d-flex', 'align-items-center', 'justify-content-center', 'stars-div',
              (width > widthBreakpoint) && 'mt-2')}>
              <div className={classNames('rating')}>{movie.rating.toFixed(1)}</div>
              <div className={classNames('stars-outer')}>
                <div className={classNames('stars-inner')}
                  style={{ width: `${movie.rating * 20}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>)
      : 
      (<>
        <div className={classNames((width <= widthBreakpoint && height <= heightBreakpoint)
          ? 'image-container-mobile' : 'image-container', 'bg-light', 'rounded')}>
          <img src={img.substring(1)} alt={movie.title} className={classNames('image', 'rounded')} />
        </div>
        <div className={classNames('d-flex', 'align-items-center', 'justify-content-center', 
          'mt-2', 'stars-div')}>
          <div className={classNames('rating', 'pt-1')}>{movie.rating.toFixed(1)}</div>
          <div className={classNames('stars-outer')}>
            <div className={classNames('stars-inner')} 
              style={{ width: `${movie.rating * 20}%` }}>
            </div>
          </div>
        </div>
      </>)
}

export default MoviePoster;