import React from "react";
import styles from "./Gladbladet.module.css";
import gladbladet from "../images/gladbladet.svg";

export default function Gladbladet() {
  return (
    <>
      <h1>Hur vi mår är viktigast</h1>

      <p>
        Vi tror att det viktigaste som finns är att alla på Syson mår bra. Att
        vi är så glada som möjligt. För oss är det ingen floskel utan något vi
        lever efter.
      </p>

      <p>
        Så på våra möten pratar vi inte om omsättningsmål eller resultatmål. Vi
        pratar om hur folk mår och vad vi kan göra för att förbättra det.
      </p>

      <div className={styles.imageContainer}>
        <img className={styles.image} src={gladbladet} alt="gladbladet" />
        <figcaption>
          <i>Vårt faktiska gladblad per December 2021</i>
        </figcaption>
      </div>

      <p>
        2015 började vi mäta vårt mående i det vi kallar för gladbladet. Idén
        lånade vi från{" "}
        <a href="https://dna.crisp.se/docs/happiness-index.html">Crisp</a>.
      </p>

      <p>
        Det funkar så att man några gånger om året fyller i hur man trivs på
        Syson, hur man trivs på sitt uppdrag, vad som får en att må sämre och
        vad som får en att må bättre.
      </p>

      <p>
        Vi kan snabbt se trender och göra saker bättre. Alla vet hur alla mår
        och kan sträcka ut en hand om det behövs.
      </p>
    </>
  );
}
