import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png';

export default () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <div className={styles.headline}>
        <h1>Frihet, Bra Häng och Schysst Lön</h1>
      </div>
    </header>
  );
};
