import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../images/logo.png";
import logoGreen from "../images/logo-green.png";
import Emoji from "./Emoji";
import wavingHand from "../emojis/waving-hand.png";
import landingPortraitSmallWebp from "../images/landing-portrait.webp";
import landingLandscapeWebp from "../images/landing-landscape.webp";
import landingPortraitSmall from "../images/landing-portrait.jpg";
import landingLandscape from "../images/landing-landscape.jpg";

const isSmallDevice = () => {
  return window.innerWidth < 1024;
};

export default function Header() {
  return (
    <header className={styles.header}>
      {isSmallDevice() && (
        <picture>
          <source
            media="(min-width: 450px)"
            srcSet={landingLandscapeWebp}
            type="image/webp"
          />
          <source
            media="(min-width: 450px)"
            srcSet={landingLandscape}
            type="image/jpeg"
          />
          <source srcSet={landingPortraitSmallWebp} type="image/webp" />
          <source srcSet={landingPortraitSmall} type="image/jpeg" />
          <img
            className={styles.heroImage}
            src={landingPortraitSmallWebp}
            alt=""
          />
        </picture>
      )}
      {!isSmallDevice() && (
        <video autoPlay loop muted playsInline>
          <source src="/video/desktop.mp4" type="video/mp4" />
        </video>
      )}
      <div className={styles.content}>
        <Link to="/">
          {isSmallDevice() && (
            <img src={logoGreen} alt="Syson Logo" className={styles.logo} />
          )}
          {!isSmallDevice() && (
            <img src={logo} alt="Syson Logo" className={styles.logo} />
          )}
        </Link>
        <div className={styles.headline}>
          <h1>Frihet, bra häng och schysst lön</h1>
          <p>
            Hej! <Emoji src={wavingHand} /> Vi är konsulter i Stockholm, duktiga
            inom systemutveckling och test.
          </p>
        </div>
      </div>
    </header>
  );
}
