import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Squares.module.css';
import arrow from './arrow.svg';
import Emoji from './Emoji';
import pencil from './emojis/pencil.png';
import woman from './emojis/woman_office_worker.png';
import trophy from './emojis/trophy.png';

const Square = ({ emoji, title, description, url, color }) => (
  <div className={classNames(styles.square, styles[color])}>
    <div className={styles.content}>
      <div>
        <p className={styles.emoji}>
          <Emoji src={emoji} />
        </p>
        <h3>{title}</h3>
      </div>
      <Link to={url} className={styles.link}>
        <span className={styles.linkText}>{description}</span>{' '}
        <img src={arrow} />
      </Link>
    </div>
  </div>
);

export default () => {
  return (
    <section>
      <div className={classNames('container', styles.squares)}>
        <Square
          emoji={pencil}
          title="Hur vi har räknat ut lönen"
          description="Läs mer"
          color="tradewind"
          url="/kalkylen"
        />
        <Square
          emoji={woman}
          title="Hur är konsultlivet?"
          description="Läs mer"
          color="cashmere"
          url="/"
        />
        <Square
          emoji={trophy}
          title="Man får skryta ibland"
          description="Läs mer"
          color="citrus"
          url="/gasell"
        />
      </div>
    </section>
  );
};
