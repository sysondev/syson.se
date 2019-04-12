import React, { useState } from 'react';
import styles from './SalarySlider.module.css';
import Slider from './Slider';
import { calculateSalary, DEFAULT_VALUES } from './salary'

const locale = 'sv-SE';

export default () => {
  const [rate, setRate] = useState(DEFAULT_VALUES.HOURLY_RATE);
  return (
    <div className={styles.SalarySlider}>
      <div className={styles.background} />
      <div className={styles.moneyBox}>
        <div>
          <span className={styles.label}>Timpris</span>
          <span className={styles.money}>{rate.toLocaleString(locale)}</span>
          <span className={styles.label}>Kr</span>
        </div>
        <div className={styles.slider}>
          <Slider onChange={setRate} min={600} max={1200} value={rate} />
        </div>
        <div>
          <span className={styles.label}>Lön</span>
          <span className={styles.money}>{calculateSalary({ hourlyRate: rate })}</span>
          <span className={styles.label}>Kr</span>
        </div>
      </div>
    </div>
  );
};
