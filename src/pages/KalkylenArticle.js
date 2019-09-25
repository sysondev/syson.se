import React from 'react';
import Kalkylen from '../components/Kalkylen';

export default () => {
  return (
    <div>
      <h1>Lönemodellen i detalj</h1>
      <p>Med dina 70% gör du vad du vill. Det är inte mer än rimligt.</p>
      <p>
        Extra semesterdagar? Mer i pension? Hitta ett upplägg som passar dig.
      </p>
      <Kalkylen />
      <h3>Vanliga frågor</h3>
      <p>
        <b>Behöver jag göra något säljarbete själv?</b>
      </p>
      <p>
        - Nej, du behöver inte göra något säljarbete själv. Syson hittar ditt
        uppdrag åt dig och förhandlar kontinuerligt om bästa möjliga timpris.
      </p>
      <p>
        <b>Blir jag kompenserad vid eventuellt övertidsarbete?</b>
      </p>
      <p>
        - Självklart. Du blir kompenserad för varje timme du jobbar, övertid
        eller ej.
      </p>
    </div>
  );
};
