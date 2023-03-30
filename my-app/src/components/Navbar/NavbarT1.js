import styles from "./Navbar.module.css";

export default function Navbar() {
  const handleClick = (e) => {
    window.location.href = e;
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navtitle}>
        <h3>Resume Analyser</h3>
      </div>
      <div className={styles.landingPageBtn}>
        <div className={styles.logBtn}>
          <button onClick={() => handleClick('/register')}>Sign Up</button>
        </div>
        <div className={styles.logBtn}>
          <button onClick={() => handleClick(['/login'])}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
