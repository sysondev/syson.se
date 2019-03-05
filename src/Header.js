import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png';

export default () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <div className={styles.headline}>
        <h1>Frihet, bra häng och schysst lön</h1>
        <p>Hej! 👋 Vi är konsulter i Stockholm, duktiga inom systemutveckling & test.</p>
      </div>
    </header>
  );
};
