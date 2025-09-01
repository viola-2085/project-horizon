import styles from '../../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>YourEvent</div>
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
