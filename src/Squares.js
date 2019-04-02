import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import posed from 'react-pose';
import styles from './Squares.module.css';
import arrow from './arrow.svg';
import Emoji from './Emoji';
import pencil from './emojis/pencil.png';
import chart from './emojis/chart.png';
import woman from './emojis/woman_office_worker.png';
import trophy from './emojis/trophy.png';

const Box = posed.div({
  hoverable: true,
  init: { scale: 1.0 },
  hover: { scale: 1.025 },
})

const Square = withRouter(({ history, emoji, title, description, url, color }) => (
  <Box>
    <div className={classNames(styles.square, styles[color])} onClick={() => { history.push(url) }}>
      <div className={styles.content}>
        <div>
          <p className={styles.emoji}>
            <Emoji src={emoji} />
          </p>
          <h3>{title}</h3>
        </div>
        <div className={styles.link}>
          <span className={styles.linkText}>{description}</span>{' '}
          <img src={arrow} />
        </div>
      </div>
    </div>
  </Box>
));

export default () => {
  return (
    <section>
      <div className={classNames('container', styles.squares)}>
        {/* <Square
          emoji={pencil}
          title="Hur vi har räknat ut lönen"
          description="Läs mer"
          color="tradewind"
          url="/"
        /> */}
        <Square
          emoji={chart}
          title="Hur vi mår är viktigast"
          description="Läs mer"
          color="tradewind"
          url="/gladbladet"
        />
        <Square
          emoji={woman}
          title="Hur är konsultlivet?"
          description="Läs mer"
          color="cashmere"
          url="/konsultlivet"
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
