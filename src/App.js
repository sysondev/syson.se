import React from 'react';
import classNames from 'classnames';
import styles from './App.module.css';
import SalarySlider from './SalarySlider';
import logo from './logo.png';
import People from './People';
import Insta from './Insta';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';

export default () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} />
        <div className={styles.headline}>
          <h1>Frihet, Bra Häng och Schysst Lön</h1>
        </div>
      </header>
      <main>
        <section>
          <div className={classNames('container', styles.intro)}>
            <div className={styles.introBackground} />
            <h2 className={styles.introHeadline}>
              Fokus på dig
              <span role='img' aria-label='groda'>
              {'  '}👩🏻‍💻
              </span>
            </h2>
            <div className={styles.introText}>
              <p>
              Hos oss får du friheten att fokusera på det du tycker om. Jobba på roliga projekt hos bra kunder. Umgås avslappnat och resa till nya platser. Säljarbete, administration och andra distraktioner kan du lägga åt sidan.
              </p>
              <p>
              Du kan lägga din energi på att lära dig nya saker och träffa människor snarare än att klättra i en karriärstege - vi har inte ens någon. Att jobba 8 timmar om dagen och sen [kunna] tänka på annat ser vi som en självklarhet. Man behöver vila. Man mår bra av det. Och man presterar bra av det. Win-win. 
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className={classNames('container', styles.intro)}>
            <div className={styles.introBackground} />
            <h2 className={styles.introHeadline}>
              Bäst - Inte störst 
              <span role='img' aria-label='groda'>
              {'  '}🏡
              </span>
            </h2>
            <div className={styles.introText}>
              <p>
              Vi är ett konsultbolag som utvecklar system, hemsidor och appar. Vi jobbar i roller som utvecklare, testare, tech lead och scrum master. Men det är inte det som gör Syson speciellt.
              </p>
              <p>
              Vi är ett litet bolag och det tänker vi förbli. 
Vi är idag 16 personer. Några fler ska vi bli. Men inte många.
              </p>
              <p>
              Mycket blir bättre när man är mindre. Vi lär känna varandra bättre, det blir lättare att genomföra idéer och varje person blir lite viktigare.
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
      <Footer />
    </>
  );
};
