// Savedate.js
import styles from './DressCode.module.css';
import Image from 'next/image'


export default function DressCode() {
  return (
    <main className={styles.main}>
      <div className={styles.dressSection}>
        <h3 className={styles.title}>Codigo de vestimenta</h3>
        <Image
        className={styles.music}
          src={'/playa.png'}
          width={100}
          height={100}
          alt={'image map'}
        />
        <p className={styles.text}>Recuerda que estaremos en la playa</p>
        <div className={styles.dress}>
        <Image
        className={styles.dresscode}
          src={'/dress.png'}
          width={60}
          height={60}
          alt={'image map'}
        />
        
        </div>
        <p className={styles.text}>Formal playero</p>
        <div className={styles.dress}>
        <Image
        className={styles.dresscode}
          src={'/man.png'}
          width={60}
          height={60}
          alt={'image map'}
        />
        
        </div>
        <p className={styles.text}>Formal playero</p>
      </div>
      <div>
      <h3 className={styles.title}>Agrega tu cancion favorita</h3>
      <p className={styles.text}>Que cancion te gustaria escuchar en la boda?</p>
      <a href="https://open.spotify.com/playlist/7pyOFz2MorOVsXPRaxIjZC?si=DhWB31bvRE-cE0aAG62XQw&pt=ee6cd578f79272905320282a3db1e786" target="_blank" rel="noopener noreferrer">
        <Image
            className={styles.dresscode}
            src={'/spotify.gif'}
            width={80}
            height={80}
            alt={'Spotify Playlist'}
        />
        </a>
      </div>
    </main>
  );
}
