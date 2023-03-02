import styles from './Header.module.css';

function Header() {
  return (
    <header id="main-header">
      <img class={styles.heroimg} src="https://www.solidjs.com/assets/logo-123b04bc.svg" alt="Logo" />
      <h1 class={styles.heroib}>SolidJS First Trial</h1>
    </header>
  );
}

export default Header;