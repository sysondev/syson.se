import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleHeader from './ArticleHeader';
import GasellArticle from './GasellArticle';
import KalkylenArticle from './KalkylenArticle';

export default () => (
  <>
    <ArticleHeader />
    <main>
      <Switch>
        <Route path="/gasell" component={GasellArticle} />
        <Route path="/kalkylen" component={KalkylenArticle} />
      </Switch>
    </main>
  </>
);
