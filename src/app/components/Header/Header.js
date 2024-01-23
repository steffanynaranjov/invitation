import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/save-the-date">
Save the Date
        </Link>
        <Link href="/invitation">
          Invitation
        </Link>
        <Link href="/gallery">
          Gallery
        </Link>
        <Link href="/map">
          Map
        </Link>
      </nav>
    </header>
  );
};

export default Header;