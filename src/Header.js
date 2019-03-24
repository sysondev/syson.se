import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png';
import Emoji from './Emoji'
import wavingHand from './emojis/waving-hand.png'

export default () => {

  const onClick = () => {
    window.location = '/'
  }

  return (
    <header className={styles.header}>
      <img src={logo} onClick={onClick} className={styles.logo} />
      <div className={styles.headline}>
        <h1>Frihet, bra häng och schysst lön</h1>
        <p>Hej! <Emoji src={wavingHand} /> Vi är konsulter i Stockholm, duktiga inom systemutveckling & test.</p>
      </div>
    </header>
  );
};
