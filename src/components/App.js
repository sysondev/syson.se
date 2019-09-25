import React from 'react';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ArticlePage from '../pages/ArticlePage';

export default () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route component={ArticlePage} />
      </Switch>
      <Footer />
    </>
  );
};
