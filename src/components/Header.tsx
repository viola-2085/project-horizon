import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>
            <Image src={logo} alt="the art of growing capital by invest and fund"
            width={240}
            height={64}
            className={styles.logo}
            priority
            />
          </div>
          <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#agenda">Agenda</a>
            <a href="#signup">Sign up</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
