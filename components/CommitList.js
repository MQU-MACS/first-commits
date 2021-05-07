import { getDisplayName } from "next/dist/next-server/lib/utils";
import React, { useState, useEffect } from "react";
import styles from "../styles/ComponentList.module.css";

function CommitList() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetch("/api/commiters").then((res) =>
      res.json().then((json) => {
        setNames(json.names);
      })
    );
  }, []);

  return (
    <ul className={styles.list}>
      {names.map((name, index) => (
        <li key={index.toString()} className={styles.noBullet}>
          <h1 className={styles.name}>{name}</h1>
        </li>
      ))}
    </ul>
  );
}

export default CommitList;
