'use client'

import styles from './Itinerary.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Itinerary() {
  const images = [
    "/ceremony.gif",
    "/reception.gif",
    "/cena.gif",
    "/fiesta.gif",
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
        <p>¡Nos encantaría que nos acompañaras!</p>
      </div>
      <h3 className={styles.title}>Itinerario</h3>
      <div className={styles.carouselContainer}>
        <button className={styles.navButton} onClick={handlePrev}>
          &lt;
        </button>
        <div className={styles.carouselImage}>
          <Image
            src={images[currentImageIndex]}
            width={100}
            height={100}
            alt={`Event ${currentImageIndex + 1}`}
          />
        </div>
        <button className={styles.navButton} onClick={handleNext}>
          &gt;
        </button>
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
