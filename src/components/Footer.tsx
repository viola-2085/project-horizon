import styles from '../../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>YourEvent</div>
            <p>© {new Date().getFullYear()} YourEvent Ltd.</p>
          </div>
          <div className={styles.links}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#signup">Sign up</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
