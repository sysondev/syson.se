import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './People.module.css';
import arrow from './arrow.svg';
import Emoji from './Emoji'
import rockSign from './emojis/rock-sign.png'

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const isTouchDevice = () => {
  // there's probably a better way to do this
  return window.innerWidth < 1024;
};

const people = shuffle([
  {
    name: 'Alexander Hedberg',
    profileUrl: 'https://docs.google.com/document/d/e/2PACX-1vQWXShOcs8-aZ3i516973hCPjy_N_jvfk0BM5M6LCR3jBbgviCVm9IPpGevjt8ywkzfTIakMnYGRYoT/pub',
    image: '/images/people/alexh.jpg',
    quote: ''
  },
  {
    name: 'Johanna Lagerholm',
    profileUrl: 'https://docs.google.com/document/d/1FTaXx83ry7rS5vMPMyywwaQ_XqRk-3VBmQV5Pi-7-yc/pub',
    image: '/images/people/johanna.jpg',
    quote: ''
  },
  {
    name: 'Leo Danielsson',
    profileUrl: 'https://docs.google.com/document/d/e/2PACX-1vSxiEc0TSynbc_BFIo2Yr8f-oBzkKkHtYuVcDsNclXb1N3LO0Y5UAahoGoJ2gzJUAF4CIV9YFzJ4RHK/pub',
    image: '/images/people/leo.jpg',
    quote: ''
  },
  {
    name: 'Alexander Lissenko',
    profileUrl: 'https://docs.google.com/document/d/e/2PACX-1vSFPFoMEGbFYSKwNHw1fjbEsEydunSKPyG2BPoIyoaj-4wQ1ARCWV9YnqoRL-_DZu6bkuT3ova-TkCY/pub',
    image: '/images/people/alexander.jpg',
    quote: ''
  },
  {
    name: 'Olov Gullikson',
    profileUrl: 'https://docs.google.com/document/d/e/2PACX-1vQR6JrgxZw2vG9Sc0C9XeuDs59uhXo-7edCIN_7PpYDPCJNDUid9a3McxW4OB2TNlWKuJcfBSceRC5I/pub',
    image: '/images/people/olov.jpg',
    quote: ''
  },
  {
    name: 'Anton Söderstedt',
    profileUrl: 'https://docs.google.com/document/d/1vZeB8Jxe7qM4qVV8wJBM6X2zGvQKCUEhkVY4-vTFGtk/pub',
    image: '/images/people/anton.jpg',
    quote: ''
  },
  {
    name: 'Mikael Larsson',
    profileUrl: 'https://docs.google.com/document/d/13QeSY4v8b5hOBbZPC3SkdaZqivr-D3sGh4jEj-EUCag/pub',
    image: '/images/people/micke.jpg',
    quote: ''
  },
  {
    name: 'Otto Nordgren',
    profileUrl: 'https://docs.google.com/document/d/1NwXJjs6DdApM_Qg04mQY8raWkY7IrPeaUxIa64TkIDM/pub',
    image: '/images/people/otto.jpg',
    quote: ''
  },
  {
    name: 'Magnus Linell',
    profileUrl: 'https://docs.google.com/document/d/1aTuje5x5GmgnupA6zcyPqvzm-mRebmGIO_z0JTn_4ao/pub',
    image: '/images/people/magnus.jpg',
    quote: ''
  },
  {
    name: 'Katrine Johansson',
    profileUrl: 'https://docs.google.com/document/d/1TZj2yAhj6acUkCCTEomhN2GXQNFQHp2HRt6ksnaJP2M/pub',
    image: '/images/people/katrine.jpg',
    quote: ''
  },
  {
    name: 'David Skog',
    profileUrl: 'https://docs.google.com/document/d/1ykZhFpRhlcc2CH5JnDdna6fZId4l4stmS78A92BqXh0/pub',
    image: '/images/people/david.jpg',
    quote: ''
  },
  {
    name: 'Joakim Gordillo',
    profileUrl: 'https://docs.google.com/a/syson.se/document/d/1zNxgPpG5LfE35n1OLF3rB6iKIHbZBUCbo__h9wOC2wE/pub',
    image: '/images/people/joakim.jpg',
    quote: ''
  },
  {
    name: 'Patrick Thomsson',
    profileUrl: 'https://docs.google.com/document/d/1GuaMyViqwnT8Nysba9n3LKW2CBJesuORIiGlY93twqk/pub',
    image: '/images/people/patrick.jpg',
    quote: ''
  },
  {
    name: 'Soroush Hakami',
    image: '/images/people/soroush.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/soroush-hakami/',
    quote: 'Rekrytering, sälj och sånt!'
  },
  {
    name: 'Love Gehlin',
    profileUrl: 'https://docs.google.com/document/d/13WyjMVR69WEQ75vV5UPBtdOjLMaqUFTyZLAwPr90Hvk/pub',
    image: '/images/people/love.jpg',
    quote: ''
  },
  {
    name: 'Anders Söderstedt',
    image: '/images/people/anders.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/anders-s%C3%B6derstedt-1631b8/',
    quote: ''
  }
]);

const Link = ({ url, title }) => (
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
        <h2>Foodies, gamers och rockers <Emoji src={rockSign} /></h2>
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
              {person.linkedInUrl &&
                <Link url={person.linkedInUrl} title="LinkedIn" />
              }
              {person.profileUrl &&
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
