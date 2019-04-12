import React from 'react';
import Kalkylen from './Kalkylen';

export default () => {
  return (
    <div className="container">
      <h1>Räkna ut din lön</h1>
      <p>Med dina 70% gör du vad du vill. Det är inte mer än rimligt.</p>
      <p>Extra semesterdagar? Mer i pension? Hitta ett upplägg som passar dig.</p>
      <Kalkylen />
    </div>
  );
};
