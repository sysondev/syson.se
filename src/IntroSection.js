import React from 'react';
import classNames from 'classnames';
import styles from './IntroSection.module.css';
import Emoji from './Emoji'

export default ({ title, children, leftAligned, emoji }) => {
  return (
    <section>
      <div
        className={classNames(
          'container',
          styles.intro,
          leftAligned && styles.leftAligned
        )}
      >
        <div className={styles.background} />
        <h2 className={styles.headline}>{title} {emoji && <Emoji src={emoji} />}</h2>
        <div className={styles.text}>{children}</div>
      </div>
    </section>
  );
};
