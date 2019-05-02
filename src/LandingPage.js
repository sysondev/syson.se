import React from 'react';
import SalarySlider from './SalarySlider';
import People from './People';
import Insta from './Insta';
import Header from './Header';
import Contact from './Contact';
import Map from './Map';
import IntroSection from './IntroSection';
import Customers from './Customers';
import Gasell from './Gasell';
import Buzzwords from './Buzzwords'
import Squares from './Squares';
import Emoji from './Emoji';
import handshake from './emojis/handshake.png';
import woman from './emojis/woman.png';
import house from './emojis/house.png';
import peoples from './peoples'

export default () => (
  <>
    <Header />
    <main>
      <IntroSection title="Fokus på dig" emoji={woman}>
        <p>
          Hos oss får du friheten att fokusera på det du tycker om. Jobba på
          roliga projekt hos bra kunder. Umgås avslappnat och resa till nya
          platser. Säljarbete, administration och andra distraktioner kan du
          lägga åt sidan.
        </p>
        <p>
          Du kan lägga din energi på uppdraget och på att lära dig nya saker. Att jobba 8 timmar om dagen
          och sen kunna tänka på annat ser vi som en självklarhet.
        </p>
      </IntroSection>
      <People />
      <Buzzwords />
      <section>
        <div className="container">
          <h2>
            En schysst deal <Emoji src={handshake} />
          </h2>
          <p>
            Vår lönemodell är enkel. Du får <b>70%</b> av timpriset när du har ett
            uppdrag, annars är du garanterad 26 000 kr. Att hitta uppdraget eller förhandla om timpriset behöver du inte lägga någon energi på själv, det löser vi.
          </p>
          <p>
            Vi räknar med att du tar minst sex veckors semester, men du har
            friheten att ta mer om du vill. Vill du ha en tjänstebil, spara mer
            pengar till pensionen eller något annat så hjälper vi dig med det.
          </p>
          <p>Alla har samma deal, nyanställd som veteran.</p>
          <SalarySlider />
        </div>
      </section>
      <Squares />
      <Customers />
      <Gasell />
      <IntroSection title="Bäst, inte störst" emoji={house}>
        <p>
          Vi är ett konsultbolag som utvecklar system, hemsidor och appar. Vi
          jobbar i roller som utvecklare, testare, tech lead och scrum master.
          Men det är inte det som gör Syson speciellt.
        </p>
        <p>
          Vi är ett <b>litet bolag</b> och det tänker vi förbli. Vi är idag {peoples.length + ' '}
          personer. Några fler ska vi bli. Men inte många.
        </p>
        <p>
          Mycket blir bättre när man är mindre. Vi lär känna varandra bättre,
          det blir lättare att genomföra idéer och varje person blir lite
          viktigare.
        </p>
      </IntroSection>
      <Insta />
      <Contact />
      <Map />
    </main>
  </>
);
