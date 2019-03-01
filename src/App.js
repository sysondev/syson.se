import React from 'react';
import classNames from 'classnames';
import styles from './App.module.css';
import SalarySlider from './SalarySlider';
import logo from './logo.png';
import People from './People';

export default () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} />
        <div className={styles.headline}>
          <h1>Frihet, Schysst lön och bra häng 🐸</h1>
        </div>
      </header>
      <main>
        <section>
          <div className={classNames('container', styles.intro)}>
            <div className={styles.introBackground} />
            <h2 className={styles.introHeadline}>
              Frihet, Schysst lön och bra häng{' '}
              <span role='img' aria-label='groda'>
                🐸
              </span>
            </h2>
            <div className={styles.introText}>
              <p>
                Hos oss kan du fokusera på det du tycker om. Jobba på roliga
                projekt hos bra kunder. Umgås avslappnat och resa till nya
                platser. Säljarbete och administration kan du lägga åt sidan.
              </p>
              <p>
                Du som söker dig till Syson drivs mer av att lära dig nya saker
                och träffa nya människor än att klättra i en karriärstege.
              </p>
            </div>
          </div>
        </section>
        <People />
        <SalarySlider />
      </main>
    </>
  );
};
