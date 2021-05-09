import React, { useState, useEffect } from "react";
import styles from "../styles/ComponentList.module.css";

const CACHE_TIME = Number(process.env.CACHE_TIME);

function CommitList() {
  const [names, setNames] = useState([]);

  async function getNames() {
    const res = await fetch("/api/commiters");
    const data = await res.json();
    setNames(data.names);
  }

  useEffect(() => {
    getNames();

    setInterval(() => {
      getNames();
    }, CACHE_TIME);
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
