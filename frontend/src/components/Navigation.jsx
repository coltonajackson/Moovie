// Import React Modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
// Import NPM Modules
import classNames from 'classnames';

function Navigation() {  
  const [visible, setVisible] = useState(false);
  const [effect, setEffect] = useState({
    moovie: false,
    link_a: false,
    link_b: false,
    link_c: false,
    link_d: false
  });

  return (
    <nav>
      <div className={classNames('p-2', 'ms-2', 'd-none', 'd-lg-flex')}>
        <button className={classNames('nav-btn', 'open-btn')} onClick={() => setVisible(!visible)}>
          <i className={classNames('fas', 'fa-bars', 'text-light')}></i>
        </button>
      </div>
      <div className={classNames('nav', 'd-none', 'd-lg-flex', visible ? 'visible' : '')}>
        <button className={classNames('nav-btn', 'close-btn')} onClick={() => {
          setVisible(!visible);
          setEffect({ moovie: false, link_a: false, link_b: false, link_c: false, link_d: false })
        }}>
          <i className={classNames('fas', 'fa-times', 'text-light')}></i>
        </button>
        <div className={classNames('d-flex', 'justify-content-center', 'my-4', 'bd-highlight')} 
          id='moovie-home-container'>
          <Link to='/' className={classNames('rounded', 'px-3', 'py-1', 'btn', 'btn-transparent', 
            'text-light', 'text-center', effect.moovie ? 'btn-light' : classNames('btn-transparent', 
            'text-white'))} id='moovie-home' onMouseOver={() => setEffect({ ...effect, moovie: true })} 
            onMouseOut={() => setEffect({ ...effect, moovie: false })} 
            onClick={() => setVisible(!visible)}>
            <h1 className={classNames('display-1')} id='moovie-home-text'>Moovie</h1>
          </Link>
        </div>
        <div className={classNames('d-flex', 'justify-content-center', 'w-100')} 
          id='nav-list'>
          <ul className={classNames('list', 'w-90')}>
            <li>
              <Link className={classNames('menu-item', 'btn', 'w-100', effect.link_a ? 
                classNames('btn-dark', 'text-white') : 'btn-light')} to='#' 
                onMouseOver={() => setEffect({ ...effect, link_a: true })} 
                onMouseOut={() => setEffect({ ...effect, link_a: false })}>
                Movies
              </Link>
            </li>
            <li>
              <Link className={classNames('menu-item', 'btn', 'w-100', effect.link_b ? 
                classNames('btn-dark', 'text-white') : 'btn-light')} to='#' 
                onMouseOver={() => setEffect({ ...effect, link_b: true })} 
                onMouseOut={() => setEffect({ ...effect, link_b: false })}>
                Reviews
              </Link>
            </li>
            <li>
              <Link className={classNames('menu-item', 'btn', 'w-100', effect.link_c ? 
                classNames('btn-dark', 'text-white') : 'btn-light')} to='#' 
                onMouseOver={() => setEffect({ ...effect, link_c: true })} 
                onMouseOut={() => setEffect({ ...effect, link_c: false })}>
                Pricing
              </Link>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={classNames('menu-item', 'btn', 'btn-light', 'w-100',
                effect.link_d ? classNames('btn-dark', 'text-white') : 'btn-light')}
                onMouseOver={() => setEffect({ ...effect, link_d: true })} 
                onMouseOut={() => setEffect({ ...effect, link_d: false })}>
                  More Info
                </Dropdown.Toggle>
                <Dropdown.Menu className='w-100'>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;