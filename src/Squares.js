import React from 'react';
import classNames from 'classnames';
import styles from './Squares.module.css';
import arrow from './arrow.svg';



const Square = ({ emoji, title, description, url }) => (
  <div className={styles.square}>
    <div className={styles.content}>
      <h1>{emoji}</h1>
      <h3>{title}</h3>
      <a
        href={url}
        className={styles.link}
      >
        <span className={styles.linkText}>{description}</span>{' '}
        <img src={arrow} />
      </a>
    </div>
  </div >
)

export default () => {
  return (
    <section>
      <div className={classNames('container', styles.squares)}>
        <Square emoji="⚖️" title="Kalkylen" description="Så har vi räknat" />
        <Square emoji="👩🏼‍💻" title="Konsultlivet" description="Hur är det?" />
        <Square emoji="🏆" title="Man får skryta ibland" description="Vi vann ett pris ..." />
      </div>
    </section>
  );
};
