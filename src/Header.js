import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';
import Emoji from './Emoji'
import wavingHand from './emojis/waving-hand.png'

export default () => (
    <header className={styles.header}>
      <Link to="/"><img src={logo} alt="Syson Logo" className={styles.logo} /></Link>
      <div className={styles.headline}>
        <h1>Frihet, bra häng och schysst lön</h1>
        <p>Hej! <Emoji src={wavingHand} /> Vi är konsulter i Stockholm, duktiga inom systemutveckling & test.</p>
      </div>
    </header>
  );
