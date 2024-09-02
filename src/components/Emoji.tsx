import React from "react";
import classNames from "classnames";
import styles from "./Emoji.module.css";

export default function Emoji({ src }: {
  src: string;
}) {
  return <img className={classNames(styles.emoji)} src={src} alt="emoji" />;
}
