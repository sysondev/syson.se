import React from 'react';
import classNames from 'classnames';
import styles from './Gasell.module.css';
import gasell from './gasell.png';


export default () => {
  return (
    <div
      className={classNames(
        styles.gasell
      )}
    >
      <img className={classNames(styles.image)} src={gasell} alt="DI Gasell 2018" />
    </div>
  );
};
