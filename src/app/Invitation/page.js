import styles from './Invitation.module.css';

export default function Invitation() {
  return (
    <main className={styles.main}>
        <div className={styles.header}>
      <p className={`${styles.title} ${styles.appearanimation}`}>Gaby & Steff</p>
      <p className={styles.text}>17 . 08 . 2024</p>
      </div>
    </main>

  );
}

