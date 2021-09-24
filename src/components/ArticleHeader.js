import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-green.png";
import styles from "./ArticleHeader.module.css";

export default function ArticleHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.background} />
      <Link to="/">
        <img src={logo} alt="Syson Logo" style={{ width: "150px" }} />
      </Link>
    </header>
  );
}
