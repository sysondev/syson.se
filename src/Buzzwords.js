import React from 'react';
import classNames from 'classnames';
import styles from './Buzzwords.module.css';


export default () => {
  return (
    <div
      className={classNames(
        styles.buzzwords
      )}
    >
      <div className={classNames('container', styles.content)}>
        <h1 className={styles.title}>Tekniker vi gillar</h1>
        <div className={classNames(styles.words)}>
          <h3 className={classNames(styles.word)}>JavaScript</h3>
          <h3 className={classNames(styles.word)}>React</h3>
          <h3 className={classNames(styles.word)}>Java</h3>
          <h3 className={classNames(styles.word)}>.NET</h3>
          <h3 className={classNames(styles.word)}>Docker</h3>
          <h3 className={classNames(styles.word)}>Node</h3>
        </div>
      </div>
    </div>
  );
};
