import React from 'react';
import styles from './Contact.module.css';
import starbox from './starbox.png';
export default () => {
  return (
    <section>
      <div className='container'>
        <h2>Säg hej! 😃</h2>
        <div className={styles.contact}>
          <div className={styles.left}>
            <p>Vi sitter på The Park’s lokaler i City, Vasastan & Södermalm.</p>
            <a href='mailto:hej@syson.se' className={styles.mail}>
              hej@syson.se
            </a>
          </div>
          <div className={styles.list}>
            <div>Anders</div>
            <a href='tel:700707070700'>070-7070000</a>
            <div>Soroush</div>
            <a href='tel:700707070700'>070-7070000</a>
            <div>Love</div>
            <a href='tel:700707070700'>070-7070000</a>
          </div>
          <div>
            <img src={starbox} />
          </div>
        </div>
      </div>
    </section>
  );
};
