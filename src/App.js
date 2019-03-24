import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

export default () => {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};
