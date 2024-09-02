import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Slider.module.css";

export default function Slider({ min, max, value, onChange }: {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  const bar = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleChange = useCallback(
    (dragX: number) => {
      if(!bar.current) return;
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

  const mouseDown = (event:  React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    handleChange(event.clientX);
  };

  const mouseUp = () => {
    setDragging(false);
  };

  const touchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    handleChange(event.touches[0].clientX);
  };

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      if (dragging) {
        handleChange(event.clientX);
      }
    };

    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mousemove", mouseMove);
    return () => {
      document.removeEventListener("mouseup", mouseUp);
      document.removeEventListener("mousemove", mouseMove);
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
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
        />
      </div>
    </div>
  );
}
