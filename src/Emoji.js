import React from 'react';
import classNames from 'classnames';
import styles from './Emoji.module.css';


export default ({ src }) =>
  <img className={classNames(styles.emoji)} src={src} />
