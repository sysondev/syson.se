import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './ArticlePage.module.css';
import ArticleHeader from './ArticleHeader';
import GasellArticle from './GasellArticle';

export default () => (
  <>
    <ArticleHeader />
    <main className={styles.content}>
      <Switch>
        <Route path="/gasell" component={GasellArticle} />
      </Switch>
    </main>
  </>
);
