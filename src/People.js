import React from 'react';
import classNames from 'classnames';
import styles from './People.module.css';
import leo from './leo.jpg';
import arrow from './arrow.svg';

const people = [
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  },
  {
    name: 'Leo Danielsan',
    url: '//google.se',
    image: leo,
    quote: 'Jag heter Leo Danielsson egentligen'
  }
];

export default () => {
  return (
    <section className={styles.section}>
      <div className='container'>
        <h2>DJ’s, Föräldrar och Hårdrockare 🤘</h2>
      </div>
      <div className={styles.people}>
        {people.map(person => (
          <div
            key={person.name}
            className={styles.person}
            style={{ backgroundImage: `url(${person.image})` }}
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
      </div>
    </section>
  );
};
