import React from 'react';
import classNames from 'classnames';
import styles from './App.module.css';
import SalarySlider from './SalarySlider';
import People from './People';
import Insta from './Insta';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';
import Header from './Header';
import IntroSection from './IntroSection';

export default () => {
  return (
    <>
      <Header />
      <main>
        <IntroSection title='Fokus på dig 👩🏻‍💻'>
          <p>
            Hos oss får du friheten att fokusera på det du tycker om. Jobba på
            roliga projekt hos bra kunder. Umgås avslappnat och resa till nya
            platser. Säljarbete, administration och andra distraktioner kan du
            lägga åt sidan.
          </p>
          <p>
            Du kan lägga din energi på att lära dig nya saker och träffa
            människor snarare än att klättra i en karriärstege - vi har inte ens
            någon. Att jobba 8 timmar om dagen och sen [kunna] tänka på annat
            ser vi som en självklarhet. Man behöver vila. Man mår bra av det.
            Och man presterar bra av det. Win-win.
          </p>
        </IntroSection>
        <IntroSection title='Bäst - Inte störst 🏡' leftAligned>
          <p>
            Hos oss får du friheten att fokusera på det du tycker om. Jobba på
            roliga projekt hos bra kunder. Umgås avslappnat och resa till nya
            platser. Säljarbete, administration och andra distraktioner kan du
            lägga åt sidan.
          </p>
          <p>
            Du kan lägga din energi på att lära dig nya saker och träffa
            människor snarare än att klättra i en karriärstege - vi har inte ens
            någon. Att jobba 8 timmar om dagen och sen [kunna] tänka på annat
            ser vi som en självklarhet. Man behöver vila. Man mår bra av det.
            Och man presterar bra av det. Win-win.
          </p>
        </IntroSection>
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
