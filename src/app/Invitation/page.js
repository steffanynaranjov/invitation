import styles from './Invitation.module.css';
import Image from 'next/image'

export default function Invitation() {
  return (
    <main className={styles.main}>
        <div className={styles.header}>
      <p className={`${styles.title} ${styles.appearanimation}`}>Gaby & Steff</p>
      <p className={styles.text}>17 . 08 . 2024</p>
      </div>
      <Image
        src={'/hojas.png'}
        width={300}
        height={300}
        alt={'image map'}
        className={styles.flower}
        />
        <Image
        src={'/hojas.png'}
        width={300}
        height={300}
        alt={'image map'}
        className={styles.flowerdown}
        />
    </main>

  );
}

