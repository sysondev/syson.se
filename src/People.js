import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './People.module.css';
import leo from './leo.jpg';
import arrow from './arrow.svg';

const people = [
  {
    name: 'Alexander Hedberg',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Johanna Lagerholm',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsson',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Alexander Lissenko',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Olov Gullikson',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Anton Söderstedt',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Mikael Larsson',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Otto Nordgren',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Magnus Linell',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Katrine Johansson',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'David Skog',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Joakim Gordillo',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Patrick Thomsson',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Soroush Hakami',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Love Gehlin',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Anders Söderstedt',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  }
];

export default () => {
  const [highlighted, setHighlighted] = useState();
  const peopleElement = useRef();
  const refs = people.reduce((refMap, person) => {
    refMap[person.name] = useRef();
    return refMap;
  }, {});

  const highlightCenter = () => {
    const centerPerson = Object.keys(refs).find(name => {
      const rect = refs[name].current.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;
      return rect.left < viewportCenter && rect.right > viewportCenter;
    });
    setHighlighted(centerPerson);
  };

  useEffect(() => {
    peopleElement.current.scrollLeft = 100;
    highlightCenter();
  }, []);

  return (
    <section className={styles.section}>
      <div className='container'>
        <h2>Foodies, löpare och hårdrockare 🤘</h2>
      </div>
      <div
        className={styles.people}
        onScroll={highlightCenter}
        ref={peopleElement}
      >
        <div className={styles.space} />
        {people.map(person => (
          <div
            key={person.name}
            className={classNames(
              styles.person,
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
            <a
              href={person.url}
              className={classNames(styles.link, styles.highlight)}
            >
              <span className={styles.linkText}>Profil</span>{' '}
              <img src={arrow} />
            </a>
          </div>
        ))}
        <div className={styles.space} />
      </div>
    </section>
  );
};
