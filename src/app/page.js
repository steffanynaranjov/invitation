import styles from './Home.module.css';
import Image from 'next/image';

export default function Home() {
    return (
      <main className={styles.main}>
        <div className={styles.sobre}>
        <div className={styles.verticalLine}></div>
        <a
        className={styles.homepage}
        href={'/Home'}
        rel="noopener noreferrer"
      >
            <Image
            src={'/logo.png'}
            width={300}
            height={300}
            alt={'image map'}
            className={styles.logo}
            />
            </a>
                <div className={styles.verticalLineB}></div>
        </div>
      </main>
    );
  }
