import classNames from "classnames";
import React, { useState } from "react";
import rockSign from "../emojis/rock-sign.png";
import arrow from "../icons/arrow.svg";
import people from "../peoples";
import Emoji from "./Emoji";
import styles from "./People.module.css";
import PeopleSlider from "./PeopleSlider";

const Link = ({ url, title }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={classNames(styles.link, styles.highlight)}
  >
    <span className={styles.linkText}>{title}</span> <img src={arrow} alt="" />
  </a>
);

export default function People() {
  const [showAllPeople, setShowAllPeople] = useState(false);

  const toggleShowAllPeople = () => {
    setShowAllPeople(!showAllPeople);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2>
          Vi är Syson <Emoji src={rockSign} />
        </h2>
      </div>
      {!showAllPeople && <PeopleSlider />}
      {showAllPeople && (
        <div className={classNames("container", styles.allPeople)}>
          {people.map((person) => (
            <div key={person.name} className={styles.allPeoplePerson}>
              <div
                className={classNames(styles.details, styles.highlighted)}
                style={{ backgroundImage: `url(${person.image})` }}
              >
                <div className={classNames(styles.name)}>{person.name}</div>
                <div className={styles.bottomDetails}>
                  <div className={classNames(styles.quote)}>{person.quote}</div>
                  {person.linkedInUrl && (
                    <Link url={person.linkedInUrl} title="LinkedIn" />
                  )}
                  {person.profileUrl && (
                    <Link url={person.profileUrl} title="Profil" />
                  )}
                  {person.mail && (
                    <Link url={"mailto:" + person.mail} title={person.mail} />
                  )}
                  {person.phone && (
                    <Link url={"tel:" + person.phone} title={person.phone} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={classNames("container", styles.buttonContainer)}>
        <button
          className={classNames(
            !showAllPeople && styles.button,
            showAllPeople && styles.invertedButton
          )}
          onClick={toggleShowAllPeople}
        >
          {showAllPeople ? "DÖLJ" : "VISA ALLA"}
        </button>
      </div>
    </section>
  );
}
