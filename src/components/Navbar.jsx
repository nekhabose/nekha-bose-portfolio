import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <header className={styles.navbar}>
    <div className={styles.logo}>Nekha Bose</div>
    <nav className={styles.navLinks}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>
      <NavLink to="/experience" className={({ isActive }) => isActive ? styles.active : ''}>Experience</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
    </nav>
  </header>
);

export default Navbar;
