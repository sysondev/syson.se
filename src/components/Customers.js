import React from "react";
import classNames from "classnames";
import styles from "./Customers.module.css";
import trustly from "../images/trustly.png";
import comhem from "../images/comhem.png";
import sj from "../images/sj.png";
import klarna from "../images/klarna.png";
import assa from "../images/assa.png";

export default function Customers({ title }) {
  return (
    <div className={classNames(styles.customers)}>
      <div className={classNames("container", styles.content)}>
        <h1 className={styles.title}>Några av våra kunder</h1>
        <div className={classNames(styles.logos)}>
          <img className={styles.logo} src={klarna} alt="Klarna" />
          <img className={styles.logo} src={comhem} alt="Com Hem" />
          <img className={styles.logo} src={sj} alt="SJ" />
          <img className={styles.logo} src={assa} alt="ASSA" />
          <img className={styles.logo} src={trustly} alt="Trustly" />
        </div>
      </div>
    </div>
  );
}
