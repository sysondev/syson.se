import React from "react";
import styles from "./Contact.module.css";
import sysonman from "../images/sysonman.png";
export default function Contact() {
  return (
    <section>
      <div className="container">
        <h2>Säg hej!</h2>
        <div className={styles.contact}>
          <div className={styles.left}>
            <p>Vi vill alltid höra från trevligt folk. </p>
            <p>
              Fikasugen? Skicka ett mail så hittar vi en tid som passar.
            </p>
          </div>
          <div className={styles.list}>
            <a href="mailto:hej@syson.se">hej@syson.se</a>
          </div>
          <div className={styles.sysonmanContainer}>
            <img className={styles.sysonman} src={sysonman} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
