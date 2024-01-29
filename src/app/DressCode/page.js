// Savedate.js
import styles from './DressCode.module.css';
import Image from 'next/image'


export default function DressCode() {
  return (
    <main className={styles.main}>
      <div className={styles.dressSection}>
        <h3 className={styles.title}>Día del evento</h3>
        <p className={styles.textSimple}>Hagamos juntos una fiesta épica. <br></br>Aquí algunos detalles a tener en cuenta.</p>
        <div className={styles.dresscodeSection}>
            <p className={styles.code}>Código de vestimenta</p>
        <div className={styles.dress}>
        <Image
        className={styles.dresscode}
          src={'/clothes.png'}
          width={60}
          height={60}
          alt={'image map'}
        />
        
        </div> 
        <p className={styles.textSimple}>Formal playero</p>
      </div>
      </div>
      <div className={styles.dresscodeSection}>
      <p className={styles.code}>Agrega tu cancion favorita</p><br></br>
      <p className={styles.textSimple}>¿Cuál es la canción que no debe faltar en la playlist de la fiesta?</p>
      <a href="https://open.spotify.com/playlist/7pyOFz2MorOVsXPRaxIjZC?si=DhWB31bvRE-cE0aAG62XQw&pt=ee6cd578f79272905320282a3db1e786" target="_blank" rel="noopener noreferrer">
        <Image
            className={styles.dresscode}
            src={'/musicsong.gif'}
            width={100}
            height={100}
            alt={'Spotify Playlist'}
        />
        </a>
      </div>
      <div className={styles.dresscodeSection}>
      <p className={styles.code}>Confirma tu asistencia</p><br></br>
      <p className={styles.textSimple}>¿Cuál es la canción que no debe faltar en la playlist de la fiesta?</p>
      <a href="https://open.spotify.com/playlist/7pyOFz2MorOVsXPRaxIjZC?si=DhWB31bvRE-cE0aAG62XQw&pt=ee6cd578f79272905320282a3db1e786" target="_blank" rel="noopener noreferrer">
        <Image
            className={styles.dresscode}
            src={'/musicsong.gif'}
            width={100}
            height={100}
            alt={'Spotify Playlist'}
        />
        </a>
      </div>
    </main>
  );
}
