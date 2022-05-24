// Import React Modules
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Import NPM Modules
import classNames from 'classnames';
// Import Scripts
import UseViewport from '../scripts/UseViewport';

function MobileNavigation() {
  const { width, height } = UseViewport();
  const midWidthBreakpoint = 500;
  const smallWidthBreakpoint = 350;
  const heightBreakpoint = 1050;

  return (
    <div className={classNames('footer-nav', 'fixed-bottom', 'd-flex',
       'd-lg-none', 'justify-content-center', 'align-items-center', 'bd-highlight')}
       style={{ fontSize: height > heightBreakpoint ? '40px' : '30px', 
        height: height > heightBreakpoint ? '80px' : '60px' }}>
      <div>
        <Link className={classNames('nav-icon', 'h-100', 'w-25', 
          ((width > smallWidthBreakpoint && width <= midWidthBreakpoint) && 'mx-3') 
          || ((width > midWidthBreakpoint) && 'mx-4') || 'mx-2')} to='/'>
          <i className={classNames('fa-solid', 'fa-house')}></i>
        </Link>
        <Link className={classNames('nav-icon', 'h-100', 'w-25',
          ((width > smallWidthBreakpoint && width <= midWidthBreakpoint) && 'mx-3') 
          || ((width > midWidthBreakpoint) && 'mx-4') || 'mx-2')} to='#'>
          <i className={classNames('fa-solid', 'fa-clapperboard')}></i>
        </Link>
        <Link className={classNames('nav-icon', 'h-100', 'w-25',
          ((width > smallWidthBreakpoint && width <= midWidthBreakpoint) && 'mx-3') 
          || ((width > midWidthBreakpoint) && 'mx-4') || 'mx-2')} to='#'>
          <i className={classNames('fa-solid', 'fa-star')}></i>
        </Link>
        <Link className={classNames('nav-icon', 'h-100', 'w-25',
          ((width > smallWidthBreakpoint && width <= midWidthBreakpoint) && 'mx-3') 
          || ((width > midWidthBreakpoint) && 'mx-4') || 'mx-2')} to='#'>
          <i className={classNames('fa-solid', 'fa-user')}></i>
        </Link>
      </div>
    </div>
  )
}

export default MobileNavigation;