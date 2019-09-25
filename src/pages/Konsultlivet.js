import React from 'react';
import styles from './Konsultlivet.module.css';
import konsultlivet from '../images/konsultlivet.png';

export default () => {
  return (
    <>
      <h1>Hur är konsultlivet?</h1>

      <p>
        Som konsult på Syson hjälper du företag att fixa system, hemsidor och
        appar. Du jobbar på kundens kontor, oftast i centrala Stockholm och är
        en i gänget i det team du jobbar i. Uppdragen varar oftast mellan 1 till
        2 år. Ibland längre, ibland kortare.
      </p>

      <div className={styles.imageContainer}>
        <img className={styles.image} src={konsultlivet} alt='' />
      </div>

      <p>
        Du blir regelbundet utmanad och får testa på nya tekniker. Du får lära
        känna människor och sätta dig in i olika system. När ett uppdrag tar
        slut och ett nytt tar vid så blir det mycket nytt, men samtidigt har du
        kvar din stabila bas i vännerna på Syson - som du träffar ofta. Luncher,
        konferenser, kvällsaktiviteter och massa annat. Så ofta som du känner
        för det.
      </p>
    </>
  );
};
