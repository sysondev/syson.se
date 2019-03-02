import React from 'react';
import classNames from 'classnames';
import styles from './IntroSection.module.css';

export default ({ title, children, leftAligned }) => {
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
        <h2 className={styles.headline}>{title}</h2>
        <div className={styles.text}>{children}</div>
      </div>
    </section>
  );
};
