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
              Fikasugen? Vi sitter på The Parks lokaler i City, Vasastan och
              Södermalm.
            </p>
          </div>
          <div className={styles.list}>
            <div>Soroush</div>
            <a href="tel:0730473441">073-047 34 41</a>
            <div>Anton</div>
            <a href="tel:0763479001">076-347 90 01</a>
            <div>Love</div>
            <a href="tel:0706591870">070-659 18 70</a>
            <div></div>
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
