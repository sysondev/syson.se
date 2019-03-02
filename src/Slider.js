import React, { useRef } from 'react';
import styles from './Slider.module.css';

export default ({ min, max, value, onChange }) => {
  const bar = useRef();

  const dragStart = e => {
    // Disable drag ghost image by setting dragImage to transparent pixel
    const img = new Image();
    img.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=';
    e.dataTransfer.setDragImage(img, 1, 1);
  };

  const drag = event => {
    const barRect = bar.current.getBoundingClientRect();
    const barWidth = barRect.right - barRect.left;
    const xPos = event.clientX - barRect.left;
    const percentage = xPos / barWidth;
    if (percentage > 0 && percentage < 1) {
      const value = Math.trunc(percentage * (max - min) + min);
      onChange(value);
    }
  };

  return (
    <div className={styles.bar} ref={bar}>
      <div
        style={{ left: `${((value - min) / (max - min)) * 100}%` }}
        className={styles.handle}
        onDragStart={dragStart}
        onDrag={drag}
        draggable
      />
    </div>
  );
};
