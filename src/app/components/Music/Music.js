'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Music.module.css';

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = document.getElementById('audio');

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleStartPlaying = () => {
    const audio = document.getElementById('audio');

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <main>
        <div className={styles.divImage}>
          <Image
            className={styles.music}
            src={isPlaying ? '/sounon.png' : '/soundoff.png'}
            width={40}
            height={40}
            alt={isPlaying ? 'Sound On' : 'Sound Off'}
            onClick={handleStartPlaying}
          />
        </div>
        <audio id="audio">
          <source src="/song.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </main>
    </div>
  );
};

export default Music;
