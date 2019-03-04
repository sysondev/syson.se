import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './People.module.css';
import arrow from './arrow.svg';

const people = [
  {
    name: 'Alexander Hedberg',
    url: '//google.se',
    image: '/images/people/alexh.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Johanna Lagerholm',
    url: '//google.se',
    image: '/images/people/johanna.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Leo Danielsson',
    url: '//google.se',
    image: '/images/people/leo.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Alexander Lissenko',
    url: '//google.se',
    image: '/images/people/alexander.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Olov Gullikson',
    url: '//google.se',
    image: '/images/people/olov.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Anton Söderstedt',
    url: '//google.se',
    image: '/images/people/anton.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Mikael Larsson',
    url: '//google.se',
    image: '/images/people/micke.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Otto Nordgren',
    url: '//google.se',
    image: '/images/people/otto.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Magnus Linell',
    url: '//google.se',
    image: '/images/people/magnus.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Katrine Johansson',
    url: '//google.se',
    image: '/images/people/katrine.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'David Skog',
    url: '//google.se',
    image: '/images/people/david.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Joakim Gordillo',
    url: '//google.se',
    image: '/images/people/joakim.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Patrick Thomsson',
    url: '//google.se',
    image: '/images/people/patrick.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Soroush Hakami',
    url: '//google.se',
    image: '/images/people/soroush.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Love Gehlin',
    url: '//google.se',
    image: '/images/people/love.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Anders Söderstedt',
    url: '//google.se',
    image: '/images/people/anders.jpg',
    quote: 'Jag jobbar med data'
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

  const mouseEnter = name => {
    setHighlighted(name);
  };

  const scroll = () => {
    if (window.innerWidth < 1024) {
      highlightCenter();
    }
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
      <div className={styles.people} ref={peopleElement} onScroll={scroll}>
        <span className={styles.space} />
        {people.map(person => (
          <div key={person.name} className={styles.person}>
            <div
              className={styles.preview}
              style={{ backgroundImage: `url(${person.image})` }}
              onMouseEnter={event => mouseEnter(event, person.name)}
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
              <a
                href={person.url}
                className={classNames(styles.link, styles.highlight)}
              >
                <span className={styles.linkText}>Profil</span>{' '}
                <img src={arrow} />
              </a>
            </div>
          </div>
        ))}
        <span className={styles.space} />
      </div>
    </section>
  );
};
