'use client'

import { useState } from 'react';
import styles from './Home.module.css';
import Image from 'next/image';

export default function Home() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

    return (
      <main className={styles.main}>
        <div className={styles.sobre}>
        <a
          className={styles.homepage}
          href="/Home"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          <Image
            src="/logo.png"
            width={300}
            height={300}
            alt="image map"
            className={`${styles.logo} ${isClicked ? styles.spin : ''}`}
          />
        </a>
        </div>
      </main>
    );
  }
