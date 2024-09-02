/* eslint-disable import/no-anonymous-default-export */
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import arrow from "../icons/arrow.svg";
import people from "../peoples";
import styles from "./People.module.css";

const isTouchDevice = () => {
  // there's probably a better way to do this
  return window.innerWidth < 1024;
};

const Link = ({ url, title }: {
  url: string;
  title: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={classNames(styles.link, styles.highlight)}
  >
    <span className={styles.linkText}>{title}</span> <img src={arrow} alt="" />
  </a>
);

export default () => {
  const [highlighted, setHighlighted] = useState("");
  const peopleElement = useRef<HTMLDivElement>(null);

  const refs = people.reduce((refMap: Record<string, React.RefObject<HTMLDivElement>>, person) => {
    refMap[person.name] = useRef<HTMLDivElement>(null);
    return refMap;
  }, {});

  const highlightCenter = () => {
    const centerPerson = Object.keys(refs).find((name) => {
      if(!refs[name].current) return;
      const rect = refs[name].current.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;
      return rect.left < viewportCenter && rect.right > viewportCenter;
    });
    centerPerson && setHighlighted(centerPerson);
  };

  const mouseEnter = (name: string) => {
    setHighlighted(name);
  };

  const scroll = () => {
    if (isTouchDevice()) {
      highlightCenter();
    }
  };

  useEffect(() => {
    highlightCenter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.people} ref={peopleElement} onScroll={scroll}>
      {people.map((person) => (
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
            <div className={styles.bottomDetails}>
              <div className={classNames(styles.quote, styles.highlight)}>
                {person.quote}
              </div>
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
  );
};
