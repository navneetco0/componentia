// components/Navbar.js

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Componentia</span>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ThemeToggle/>
    </nav>
  );
};

export default Navbar;
