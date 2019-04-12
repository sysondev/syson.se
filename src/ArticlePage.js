import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './ArticlePage.module.css';
import ArticleHeader from './ArticleHeader';
import GasellArticle from './GasellArticle';
import Konsultlivet from './Konsultlivet';
import Gladbladet from './Gladbladet';
import KalkylenArticle from './KalkylenArticle';

export default () => (
  <>
    <ArticleHeader />
    <main className={styles.content}>
      <Switch>
        <Route path="/gasell" component={GasellArticle} />
        <Route path="/konsultlivet" component={Konsultlivet} />
        <Route path="/gladbladet" component={Gladbladet} />
        <Route path="/kalkylen" component={KalkylenArticle} />
      </Switch>
    </main>
  </>
);
