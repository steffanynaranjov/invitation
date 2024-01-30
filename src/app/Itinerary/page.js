'use client'

import styles from './Itinerary.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Itinerary() {
  const images = [
    "/ceremony.jpeg",
    "/coctel.jpeg",
    "/cena.jpeg",
    "/party.jpeg",
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
      <div className={styles.top}>
        <p className={styles.title}>¡Nos encantaría que nos acompañaras!</p>
      </div>
      <h3 className={styles.title}>Itinerario</h3>
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
      <p className={styles.text}>{getEventName(currentImageIndex)}</p>
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
    </main>
  );
}

function getEventName(index) {
  const eventNames = ["Ceremonia 4:30pm", "Recepcion 6:00pm", "Cena 8:00pm", "Fiesta 10:00pm"];
  return eventNames[index];
}
