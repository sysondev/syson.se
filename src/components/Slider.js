import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Slider.module.css';

export default ({ min, max, value, onChange }) => {
  const bar = useRef();
  const [dragging, setDragging] = useState(false);

  const handleChange = useCallback(
    dragX => {
      const barRect = bar.current.getBoundingClientRect();
      const barWidth = barRect.right - barRect.left;
      const xPos = dragX - barRect.left;
      const percentage = xPos / barWidth;
      if (percentage <= 0) {
        return onChange(min);
      }
      if (percentage >= 1) {
        return onChange(max);
      }
      return onChange(Math.trunc(percentage * (max - min) + min));
    },
    [max, min, onChange]
  );

  const mouseDown = event => {
    setDragging(true);
    handleChange(event.clientX);
  };

  const mouseUp = () => {
    setDragging(false);
  };

  const touchMove = event => {
    handleChange(event.touches[0].clientX);
  };

  useEffect(() => {
    const mouseMove = event => {
      if (dragging) {
        handleChange(event.clientX);
      }
    };

    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mousemove', mouseMove);
    return () => {
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mousemove', mouseMove);
    };
  }, [dragging, handleChange]);

  const valuePercentage = ((value - min) / (max - min)) * 100;
  return (
    <div
      className={styles.slider}
      onTouchMove={touchMove}
      onTouchStart={touchMove}
      onMouseDown={mouseDown}
    >
      <div className={styles.bar} ref={bar}>
        <div
          className={styles.barFill}
          style={{ width: `${valuePercentage}%` }}
        />
        <div
          style={{ left: `${valuePercentage}%` }}
          className={styles.handle}
          role='slider'
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
        />
      </div>
    </div>
  );
};
