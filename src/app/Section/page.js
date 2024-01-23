// import Image from 'next/image'
'use client'

import styles from './Section.module.css';
import Counter from '../Counter/Counter';

export default function Section() {
  return (
    <section className={styles.section}>
        <div className={styles.welcome}>
            <p>Cada familia tiene una historia bienvenidos a la nuestra</p>
        </div>
        <div className={`${styles.boxText} ${styles.slideInBottom}`}>
            <p>¡Nos casamos!</p>
            <p>Domingo 30 de Junio 2024</p>
            <div className={styles.counter}>
            <Counter/>
            </div>
        </div>
    </section>

  );
}

