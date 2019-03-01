import React from 'react';
import Slider, { Handle } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import classNames from 'classnames';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import styles from './Slider.module.css';

export default ({ onChange, defaultValue }) => {
  const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    onChange(value);
    return (
      <Tooltip
        prefixCls='rc-slider-tooltip'
        overlay={`🥚 ${value} ${value > 15 ? '🐣🐣' : '🐣'}`}
        visible={dragging}
        placement='top'
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  return (
    <>
      <Slider
        min={600}
        max={1500}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </>
  );
};
