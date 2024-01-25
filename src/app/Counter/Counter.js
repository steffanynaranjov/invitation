'use client'

import styles from './Counter.module.css';
import { useState, useEffect } from 'react'

const Counter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "June, 30, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timer} role="timer">
      <div className={styles.col}>
        <div className={styles.box}>
          <p id={styles.day}>{days < 10 ? "0" + days : days}</p>
          <span className={styles.text}>Dias</span>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.box}>
          <p id={styles.hour}>{hours < 10 ? "0" + hours : hours}</p>
          <span className={styles.text}>Hs</span>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.box}>
          <p id={styles.minute}>{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className={styles.text}>Min</span>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.box}>
          <p id={styles.second}>{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className={styles.text}>Seg</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
