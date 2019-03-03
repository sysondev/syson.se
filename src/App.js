import React from 'react';
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
        <IntroSection title='Bäst - inte störst 🏡' leftAligned>
          <p>
            Vi är ett konsultbolag som utvecklar system, hemsidor och appar. Vi
            jobbar i roller som utvecklare, testare, tech lead och scrum master.
            Men det är inte det som gör Syson speciellt.
          </p>
          <p>
            Vi är ett litet bolag och det tänker vi förbli. Vi är idag 16
            personer. Några fler ska vi bli. Men inte många.
          </p>
          <p>
            Mycket blir bättre när man är mindre. Vi lär känna varandra bättre,
            det blir lättare att genomföra idéer och varje person blir lite
            viktigare.
          </p>
        </IntroSection>
        <People />
        <section>
          <div className='container'>
            <h2>En schysst deal 🤝</h2>
            <p>
              Vår lönemodell är simpel. Du får 70% av timpriset när du har ett
              uppdrag, annars är du garanterad 26 000 kr.
            </p>
            <p>
              Vi räknar med att du tar minst sex veckors semester, men du har
              friheten att ta mer om du vill. Vill du ha en tjänstebil, spara mer pengar till pensionen eller något annat så hjälper vi dig med det. 
            </p>
            <p>
            Alla har samma deal, nyanställd som veteran.
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
