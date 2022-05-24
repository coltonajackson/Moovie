// Import React Modules
import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// Import NPM Modules
import classNames from 'classnames';
// Import Source Components
import Layout from './components/layouts/Layout';
import Navigation from './components/Navigation';
// Import Pages
import IndexPage from './pages/IndexPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MobileNavigation from './components/MobileNavigation';
// import Custom Scripts
import UseViewport from './scripts/UseViewport';

function App() {
  const { width } = UseViewport();
  const widthBreakpoint = 992;

  return (
    <Router>
      <Layout>
        <Navigation />
        <div className={classNames('container', 'max-width-90', 'pb-5', (width <= widthBreakpoint) ? classNames('my-4','mb-5') : 'mt-5')}>
          <Routes>
            <Route exact path='/' element={<IndexPage />} />
            <Route path='/details/:id/' element={<MovieDetailsPage />} />
          </Routes>
        </div>
        <MobileNavigation />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous" />
      </Layout>
    </Router>
  );
}

export default App;