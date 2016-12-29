import React from 'react';
// import Breadcrumbs from 'react-breadcrumbs';
import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import FourOhFour from './pages/404';
import Cards from './cards/Cards';
import Card from './cards/Card';
import Category from './categories/Category';
import Categories from './categories/Categories';

import './assets/css/main';

const App = (props) => (
  <div className="main">
    <Header {...props} />
    <div className="content container">
      {/* <Breadcrumbs
        routes={routes}
        params={params}
        separator=" / "
      /> */}
      <Match exactly name="Home" pattern="/" component={Home} />
      <Match name="Cards" exactly pattern="/cards" component={Cards} />
      <Match name="Card" pattern="/cards/:id" component={Card} />
      <Match name="Categories" exactly pattern="/categories" component={Categories} />
      <Match name="Category" pattern="/categories/:category" component={Category} />
      <Match name="About" pattern="/about" component={About} />
      <Match name="Contact" pattern="/contact" component={Contact} />
      <Miss component={FourOhFour} />
    </div>
    <Footer />
  </div>
);

export default () => (
  <BrowserRouter>
    <Match pattern="/" component={App} />
  </BrowserRouter>
);