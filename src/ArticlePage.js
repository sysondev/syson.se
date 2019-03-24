import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleHeader from './ArticleHeader';
import GasellArticle from './GasellArticle';

export default () => (
  <>
    <ArticleHeader />
    <main>
      <Switch>
        <Route path="/gasell" component={GasellArticle} />
      </Switch>
    </main>
  </>
);
