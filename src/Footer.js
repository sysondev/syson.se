import React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.css';
import footerLogo from './footerLogo.svg';

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.grid, 'container')}>
        <div>
          <p>hej@syson.se</p>
        </div>
        <div>
          <p>Sveavägen 98</p>
          <p>113 50 Stockholm</p>
        </div>
        <div>
          <p>Syson AB</p>
          <p>Orgnr: 556934-1851</p>
        </div>
        <div className={styles.icon}>
          <img src={footerLogo} alt="Syson" />
        </div>
      </div>
    </footer>
  );
};
