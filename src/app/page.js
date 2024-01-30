// Home.js
'use client';
import { useState } from 'react';
import styles from './Home.module.css';
import Image from 'next/image';
import Music from './components/Music/Music'; // Import the Music component

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
      {isClicked && <Music />} {/* Render Music component when isClicked is true */}
    </main>
  );
}
