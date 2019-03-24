import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ArticlePage from './ArticlePage';

export default () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={ArticlePage} />
      </Switch>
      <Footer />
    </>
  );
};
