import React from "react";
import classNames from "classnames";
import styles from "./Gasell.module.css";
import gasell from "../images/gasell.png";

export default function Gasell() {
  return (
    <div className={classNames(styles.gasell)}>
      <img
        className={classNames(styles.image)}
        src={gasell}
        alt="DI Gasell 2018"
      />
    </div>
  );
}
