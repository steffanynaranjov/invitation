'use client'

import styles from './Location.module.css';
import Image from 'next/image';
import { useState } from 'react';


export default function Location() {
  const openGoogleMaps = () => {
    const googleMapsLink = 'https://maps.app.goo.gl/JL6MNvA8KvXvVrc6A';

    window.open(googleMapsLink, '_blank');
  };
  

  const images = [
    "/playamareygua.png",
    "/lamardebien.png",
    "/taybeach.png",
  ];

  const eventLinks = [
    'https://www.playamareygua.com/',
    'https://www.lamardebien.co/',
    'https://www.taybeach.com.co/',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className={styles.main}>
      <h3 className={styles.location}>Ubicación</h3>
      <div className={styles.image}></div>
      <p>Gitana Del Mar Boutique Beach Resort</p>
      <p>Kilometro 46 vía Riohacha.
        Santa Marta, 470001</p>
      <button className={styles.map} onClick={openGoogleMaps}>
      <Image
        className={styles.music}
          src={'/map.gif'}
          width={20}
          height={20}
          alt={'image map'}
        />
        Ver ubicación
      </button>
      <div className={styles.suggestion}>
        <h3 className={styles.title}>Sugerencias de hospedaje</h3>
        <div className={styles.carouselContainer}>
        <div className={styles.carouselImage}>
        <button className={styles.navButtonLeft} onClick={handlePrev}>
          &lt;
        </button>
          <Image
            src={images[currentImageIndex]}
            width={500}
            height={300}
            alt={`Event ${currentImageIndex + 1}`}
          />
        <button className={styles.navButtonRight} onClick={handleNext}>
          &gt;
        </button>
        </div>
      </div>
      
      <a
        className={styles.eventLink}
        href={eventLinks[currentImageIndex]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={styles.text}>{getEventName(currentImageIndex)}</p>
      </a>
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentImageIndex ? styles.activeDot : ''
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
      </div>
    </main>
  );
}

function getEventName(index) {
    const eventNames = ["Playa Mareygua", "la mar de bien", "Tay Beach Hotel"];
    return eventNames[index];
  }
  