import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';
import Emoji from './Emoji'
import wavingHand from './emojis/waving-hand.png'
import ottoSmallWebp from './otto-portrait.webp';
import ottoBigWebp from './otto-1920.webp';
import ottoSmall from './otto-portrait.jpg';
import ottoBig from './otto-1920.jpg';
import ottoFallback from './otto.jpg';

export default () => (
  <header className={styles.header}>
    {/* <picture>
      <source media="(min-width: 450px)" srcSet={ottoBigWebp} type="image/webp" />
      <source media="(min-width: 450px)" srcSet={ottoBig} type="image/jpeg" />
      <source srcSet={ottoSmallWebp} type="image/webp" />
      <source srcSet={ottoSmall} type="image/jpeg" />
      <img className={styles.heroImage} src={ottoFallback} alt="" />
    </picture> */}
    <video autoPlay loop muted style={styles.video}><source src="/video/test-small.mp4" type="video/mp4" /></video>
    <div className={styles.content}>
      <Link to="/"><img src={logo} alt="Syson Logo" className={styles.logo} /></Link>
      <div className={styles.headline}>
        <h1>Frihet, bra häng och schysst lön</h1>
        <p>Hej! <Emoji src={wavingHand} /> Vi är konsulter i Stockholm, duktiga inom systemutveckling och test.</p>
      </div>
    </div>
  </header>
);
