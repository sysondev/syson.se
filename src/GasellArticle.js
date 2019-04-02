import React from 'react';
import styles from './GasellArticle.module.css';
import gasell from './gasell.png';

export default () => {
  return <>

    <h1>Man får skryta ibland</h1>

    <div className={styles.imageContainer}><img className={styles.image} src={gasell} /></div>

    <p>Att få brev i postlådan brukar inte vara så kul nu för tiden. Det är mest reklam och räkningar. Men nyligen fick vi ett brev från Dagens Industri som vi blev glada för.</p>

    <b>"Syson uppfyller alla högt ställda krav på ett Gasellföretag!
    Vi på Dagens Industri tycker att det gör er till några av Sveriges hjältar.
    Ni har byggt ett av Sveriges snabbast växande och mest lönsamma företag.
    Ni skapar jobb för människor, ni driver tillväxt för Sverige och inspirerar andra att följa i era fotspår”
    </b>

    <p>Vi tackar, vi tackar!</p>

    <i>DI Gasell är ett pris som delas ut till företag som har visat en stark tillväxt på ett ekonomiskt hälsosamt sätt.</i>
  </>;
};
