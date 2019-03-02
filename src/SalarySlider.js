import React, { useState } from 'react';
import styles from './SalarySlider.module.css';
import Slider from './Slider';

const defaultRate = 900;

const locale = 'sv-SE';

function calculateSalary(hourlyRate) {
  return Math.floor(
    ((160 - 2.5 * 8) * hourlyRate * 0.7) / 1.3142 - 2600 * 1.2426
  ).toLocaleString(locale);
}

export default () => {
  const [rate, setRate] = useState(defaultRate);
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
          <span className={styles.money}>{calculateSalary(rate)}</span>
          <span className={styles.label}>Kr</span>
        </div>
      </div>
    </div>
  );
};
