import React from 'react';
import classNames from 'classnames';
import styles from './Kalkylen.module.css';
export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h2 className={styles.title}>Räkna ut din månadslön</h2>
        <div className={styles.inputs}>
          <div>
            <label className={styles.label}>Timpris</label>
            <input className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Timpris</label>
            <input className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Timpris</label>
            <input className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Timpris</label>
            <input className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Timpris</label>
            <input className={styles.input} />
          </div>
        </div>
      </div>
      <div className={styles.results}>
        <div className={classNames(styles.result, styles.first)}>
          <span className={styles.resultLabel}>2018 antal dagar kvar</span>
          <span className={styles.resultValue}>250</span>
        </div>
        <div className={classNames(styles.result)}>
          <span className={styles.resultLabel}>Total månadspension</span>
          <span className={styles.resultValue}>2500</span>
        </div>
        <div className={classNames(styles.result, styles.highlight)}>
          <span className={styles.resultLabel}>Månadslön</span>
          <span className={styles.resultValue}>5 miljoner!</span>
        </div>
        <div className={classNames(styles.result)}>
          <span className={styles.resultLabel}>
            Lön med rekommenderad reserv
          </span>
          <span className={styles.resultValue}>4 miljoner</span>
        </div>
      </div>
    </div>
  );
};
