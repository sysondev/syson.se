import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import posed from 'react-pose';
import styles from './Squares.module.css';
import arrow from './arrow.svg';
import Emoji from './Emoji';
import pencil from './emojis/pencil.png';
import chart from './emojis/chart.png';
import woman from './emojis/woman_office_worker.png';

const Box = posed.div({
  hoverable: true,
  init: { scale: 1.0 },
  hover: { scale: 1.025 },
})

const Square = ({ emoji, title, description, url, color }) => (
  <Box>
    <Link to={url} className={classNames(styles.square, styles[color])}>
      <div className={styles.content}>
        <div>
          <p className={styles.emoji}>
            <Emoji src={emoji} />
          </p>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.link}>
          <span className={styles.linkText}>{description}</span>{' '}
          <img src={arrow} alt="" />
        </div>
      </div>
    </Link>
  </Box>
);

export default () => {
  return (
    <section>
      <div className={classNames('container', styles.squares)}>
        <Square
          emoji={pencil}
          title="Räkna ut din lön"
          description="Läs mer"
          color="tradewind"
          url="/kalkylen"
        />
        <Square
          emoji={woman}
          title="Hur är konsultlivet?"
          description="Läs mer"
          color="cashmere"
          url="/konsultlivet"
        />
        <Square
          emoji={chart}
          title="Hur vi mår är viktigast"
          description="Läs mer"
          color="citrus"
          url="/gladbladet"
        />
      </div>
    </section>
  );
};
