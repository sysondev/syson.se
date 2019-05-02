import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';
import Emoji from './Emoji'
import wavingHand from './emojis/waving-hand.png'

export default () => (
  <header className={styles.header}>
    <video autoPlay loop muted playsInline style={styles.video}>
      <source src="/video/desktop.mp4" type="video/mp4" media="all and (min-width: 768px)" />
      <source src="/video/mobile.mp4" type="video/mp4" media="all and (max-width: 768px)" />
    </video>
    <div className={styles.content}>
      <Link to="/"><img src={logo} alt="Syson Logo" className={styles.logo} /></Link>
      <div className={styles.headline}>
        <h1>Frihet, bra häng och schysst lön</h1>
        <p>Hej! <Emoji src={wavingHand} /> Vi är konsulter i Stockholm, duktiga inom systemutveckling och test.</p>
      </div>
    </div>
  </header>
);
