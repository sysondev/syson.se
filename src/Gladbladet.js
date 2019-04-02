import React from 'react';
import styles from './Gladbladet.module.css';
import gladbladet from './gladbladet.svg';

export default () => {
  return <>

    <h1>Hur vi mår är viktigast</h1>

    <p>Vi tror att det viktigaste som finns är att alla på Syson mår bra. Att dom är så glada som möjligt. För oss är det ingen floskel utan något vi lever efter.</p>

    <p>Så på våra möten pratar vi inte om omsättningsmål eller resultatmål. Vi pratar om hur folk mår och vad vi kan göra för att förbättra det.</p>

    <div className={styles.imageContainer}><img className={styles.image} src={gladbladet} /></div>

    <p>För fyra år sedan började vi mäta hur vi mådde i något vi kallar för gladbladet. Idén snodde vi rakt av från Crisp ( https://dna.crisp.se/docs/happiness-index.html ). Vi gillar att Crisp delar med sig. Och deras tänk har inspirerat oss att också dela med oss av hur vi driver vårt bolag.</p>

    <p>Gladbladet har fört med sig flera positiva effekter.</p>
  </>;
};
