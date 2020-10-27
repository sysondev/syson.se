import React from 'react';
import classNames from 'classnames';
import jsLogo from '../images/js-logo.svg'
import reactLogo from '../images/react-logo.svg'
import javaLogo from '../images/java-logo.svg'
import netLogo from '../images/net-logo.svg'
import awsLogo from '../images/aws-logo.svg'
import nodeLogo from '../images/node-logo.svg'
import typescriptLogo from '../images/typescript-logo.svg'
import styles from './Buzzwords.module.css';


export default () => {
  return (
    <div
      className={classNames(
        styles.buzzwords
      )}
    >
      <div className={classNames('container', styles.content)}>
        <h1 className={styles.title}>Tekniker vi gillar</h1>
        <div className={classNames(styles.logos)}>
          <img className={classNames(styles.logo)} src={jsLogo} alt='JavaScript' />
          <img className={classNames(styles.logo)} src={reactLogo} alt='React' />
          <img className={classNames(styles.logo)} src={javaLogo} alt='Java' />
          <img className={classNames(styles.logo)} src={netLogo} alt='.NET' />
          <img className={classNames(styles.logo)} src={awsLogo} alt='AWS' />
          <img className={classNames(styles.logo)} src={nodeLogo} alt='Node' />
          <img className={classNames(styles.logo)} src={typescriptLogo} alt='TypeScript' />
        </div>
      </div>
    </div>
  );
};
