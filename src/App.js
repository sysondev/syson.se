import React from 'react';
import classNames from 'classnames';
import styles from './App.module.css';
import SalarySlider from './SalarySlider';
import logo from './logo.png';
import People from './People';
import Insta from './Insta';
import Contact from './Contact';
import Map from './Map';

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
        <section>
          <div className='container'>
            <h2>En schysst deal 🤝</h2>
            <p>
              <strong>
                Vår lönemodell är simpel: du får 70% av timpriset när du har ett
                uppdrag, annars är du garanterad 26 000 kr.
              </strong>{' '}
              Vi räknar med att du tar minst sex veckors semester, men du har
              friheten att ta mer om du vill.{' '}
            </p>
            <SalarySlider />
          </div>
        </section>
        <Insta />
        <Contact />
        <Map />
      </main>
    </>
  );
};
