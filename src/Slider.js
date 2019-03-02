import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css';

export default ({ min, max, value, onChange }) => {
  const bar = useRef();
  const [dragging, setDragging] = useState(false);

  const handleChange = dragX => {
    const barRect = bar.current.getBoundingClientRect();
    const barWidth = barRect.right - barRect.left;
    const xPos = dragX - barRect.left;
    const percentage = xPos / barWidth;
    if (percentage > 0 && percentage < 1) {
      const value = Math.trunc(percentage * (max - min) + min);
      onChange(value);
    }
  };

  const mouseDown = event => {
    setDragging(true);
    handleChange(event.clientX);
  };

  const mouseUp = () => {
    setDragging(false);
  };

  const mouseMove = event => {
    if (dragging) {
      handleChange(event.clientX);
    }
  };

  const touchMove = event => {
    handleChange(event.touches[0].clientX);
  };

  useEffect(() => {
    document.addEventListener('mouseup', mouseUp);
    return () => {
      document.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  const valuePercentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      className={styles.slider}
      onTouchMove={touchMove}
      onTouchStart={touchMove}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
    >
      <div className={styles.bar} ref={bar}>
        <div
          className={styles.barFill}
          style={{ width: `${valuePercentage}%` }}
        />
        <div
          style={{ left: `${valuePercentage}%` }}
          className={styles.handle}
        />
      </div>
    </div>
  );
};
