import React, { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import styles from './People.module.css';
import arrow from './arrow.svg';
import people from './peoples';

const isTouchDevice = () => {
  // there's probably a better way to do this
  return window.innerWidth < 1024;
};

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
  const [highlighted, setHighlighted] = useState();
  const peopleElement = useRef();
  const refs = people.reduce((refMap, person) => {
    refMap[person.name] = useRef();
    return refMap;
  }, {});

  const highlightCenter = useCallback(() => {
    const centerPerson = Object.keys(refs).find(name => {
      const rect = refs[name].current.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;
      return rect.left < viewportCenter && rect.right > viewportCenter;
    });
    setHighlighted(centerPerson);
  }, [refs]);

  const mouseEnter = name => {
    setHighlighted(name);
  };

  const scroll = () => {
    if (isTouchDevice()) {
      highlightCenter();
    }
  };

  useEffect(() => {
    highlightCenter();
  }, [highlightCenter]);

  return (
    <div className={styles.people} ref={peopleElement} onScroll={scroll}>
      {people.map(person => (
        <div key={person.name} className={styles.person}>
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${person.image})` }}
            onMouseEnter={() => mouseEnter(person.name)}
            ref={refs[person.name]}
          />
          <div
            className={classNames(
              styles.details,
              highlighted === person.name && styles.highlighted
            )}
            style={{ backgroundImage: `url(${person.image})` }}
            ref={refs[person.name]}
          >
            <div className={classNames(styles.name, styles.highlight)}>
              {person.name}
            </div>
            <div className={classNames(styles.quote, styles.highlight)}>
              {person.quote}
            </div>
            {person.linkedInUrl && (
              <Link url={person.linkedInUrl} title='LinkedIn' />
            )}
            {person.profileUrl && (
              <Link url={person.profileUrl} title='Profil' />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
