// Savedate.js
import styles from './Savedate.module.css';

export default function SaveTheDate() {
  return (
    <main className={styles.main}>
      <p className={`${styles.title} ${styles.appearanimation}`}>Save the date</p>
      <div className={styles.info}>
        <p className={styles.text}>17 . 08 . 2024</p>
        <p className={styles.text}>Gaby & Steff</p>
      </div>
    </main>
  );
}
