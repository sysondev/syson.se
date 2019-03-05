import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './People.module.css';
import arrow from './arrow.svg';

const isTouchDevice = () => {
  // there's probably a better way to do this
  return window.innerWidth < 1024;
};

const people = [
  {
    name: 'Alexander Hedberg',
    profileUrl: '//google.se',
    image: '/images/people/alexh.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Johanna Lagerholm',
    profileUrl: '//google.se',
    image: '/images/people/johanna.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Leo Danielsson',
    profileUrl: '//google.se',
    image: '/images/people/leo.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Alexander Lissenko',
    profileUrl: '//google.se',
    image: '/images/people/alexander.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Olov Gullikson',
    profileUrl: '//google.se',
    image: '/images/people/olov.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Anton Söderstedt',
    profileUrl: '//google.se',
    image: '/images/people/anton.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Mikael Larsson',
    profileUrl: '//google.se',
    image: '/images/people/micke.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Otto Nordgren',
    profileUrl: '//google.se',
    image: '/images/people/otto.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Magnus Linell',
    profileUrl: '//google.se',
    image: '/images/people/magnus.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Katrine Johansson',
    profileUrl: '//google.se',
    image: '/images/people/katrine.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'David Skog',
    profileUrl: '//google.se',
    image: '/images/people/david.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Joakim Gordillo',
    profileUrl: '//google.se',
    image: '/images/people/joakim.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Patrick Thomsson',
    profileUrl: '//google.se',
    image: '/images/people/patrick.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Soroush Hakami',
    image: '/images/people/soroush.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/soroush-hakami/',
    quote: 'Rekrytering, sälj och sånt!'
  },
  {
    name: 'Love Gehlin',
    profileUrl: '//google.se',
    image: '/images/people/love.jpg',
    quote: 'Jag jobbar med data'
  },
  {
    name: 'Anders Söderstedt',
    image: '/images/people/anders.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/anders-s%C3%B6derstedt-1631b8/',
    quote: 'Jag jobbar med data'
  }
];

const Link = ({ url, title }) => (
  <a
    href={url}
    target="_blank"
    className={classNames(styles.link, styles.highlight)}
  >
    <span className={styles.linkText}>{title}</span>{' '}
    <img src={arrow} />
  </a>
)

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
    if (isTouchDevice()) {
      highlightCenter();
    }
  };

  useEffect(() => {
    peopleElement.current.scrollLeft = isTouchDevice() ? 100 : 0;
    highlightCenter();
  }, []);

  return (
    <section className={styles.section}>
      <div className='container'>
        <h2>Foodies, gamers och rockers 🤘</h2>
      </div>
      <div className={styles.people} ref={peopleElement} onScroll={scroll}>
        <span className={styles.space} />
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
              { person.linkedInUrl &&
                <Link url={person.linkedInUrl} title="LinkedIn" />
              }
              { person.profileUrl &&
                <Link url={person.profileUrl} title="Profil" />
              }
            </div>
          </div>
        ))}
        <span className={styles.space} />
      </div>
    </section>
  );
};
