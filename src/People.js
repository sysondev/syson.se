import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './People.module.css';
import arrow from './arrow.svg';
import Emoji from './Emoji';
import rockSign from './emojis/rock-sign.png';
import people from './peoples';
import PeopleSlider from './PeopleSlider';

const Link = ({ url, title }) => (
  <a
    href={url}
    target="_blank"
    className={classNames(styles.link, styles.highlight)}
  >
    <span className={styles.linkText}>{title}</span> <img src={arrow} />
  </a>
);

export default () => {
  const [showAllPeople, setShowAllPeople] = useState(false);

  const toggleShowAllPeople = () => {
    setShowAllPeople(!showAllPeople);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2>
          Foodies, gamers och rockers <Emoji src={rockSign} />
        </h2>
      </div>
      {!showAllPeople && <PeopleSlider />}
      {showAllPeople && (
        <div className={classNames('container', styles.allPeople)}>
          {people.map(person => (
            <div key={person.name} className={styles.allPeoplePerson}>
              <div
                className={classNames(styles.details, styles.highlighted)}
                style={{ backgroundImage: `url(${person.image})` }}
              >
                <div className={classNames(styles.name)}>{person.name}</div>
                <div className={classNames(styles.quote)}>{person.quote}</div>
                {person.linkedInUrl && (
                  <Link url={person.linkedInUrl} title="LinkedIn" />
                )}
                {person.profileUrl && (
                  <Link url={person.profileUrl} title="Profil" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={classNames('container', styles.buttonContainer)}>
        <button
          className={classNames(
            !showAllPeople && styles.button,
            showAllPeople && styles.invertedButton
          )}
          onClick={toggleShowAllPeople}
        >
          {showAllPeople ? 'DÖLJ' : 'VISA ALLA'}
        </button>
      </div>
    </section>
  );
};
