import classNames from 'classnames';
import React, { useState } from 'react';
import posed from 'react-pose';
import rockSign from '../emojis/rock-sign.png';
import arrow from '../icons/arrow.svg';
import people from '../peoples';
import Emoji from './Emoji';
import styles from './People.module.css';
import PeopleSlider from './PeopleSlider';

const Box = posed.div({
  hoverable: true,
  init: { scale: 1.0 },
  hover: { scale: 1.025 }
});

const Link = ({ url, title }) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    className={classNames(styles.link, styles.highlight)}
  >
    <span className={styles.linkText}>{title}</span> <img src={arrow} alt='' />
  </a>
);

export default () => {
  const [showAllPeople, setShowAllPeople] = useState(false);

  const toggleShowAllPeople = () => {
    setShowAllPeople(!showAllPeople);
  };

  return (
    <section className={styles.section}>
      <div className='container'>
        <h2>
          Vi är Syson <Emoji src={rockSign} />
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
                <div className={styles.bottomDetails}>
                  <div className={classNames(styles.quote)}>{person.quote}</div>
                  {person.linkedInUrl && (
                    <Link url={person.linkedInUrl} title='LinkedIn' />
                  )}
                  {person.profileUrl && (
                    <Link url={person.profileUrl} title='Profil' />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={classNames('container', styles.buttonContainer)}>
        <Box>
          <button
            className={classNames(
              !showAllPeople && styles.button,
              showAllPeople && styles.invertedButton
            )}
            onClick={toggleShowAllPeople}
          >
            {showAllPeople ? 'DÖLJ' : 'VISA ALLA'}
          </button>
        </Box>
      </div>
    </section>
  );
};
