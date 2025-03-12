import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './NavBar.module.scss';
import { FaSun, FaMoon } from "react-icons/fa";

function NavBar({ toggleTheme, theme }) {
  return (
    <nav className={`navbar navbar-expand-md ${styles.navbar}`}>
      <div className="container">
        <h5 className="fw-bold">Swan Yee Htet</h5>

        <button 
          className="navbar-toggler ms-auto" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className={`nav-item pe-3 ${styles.item}`}>
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className={`nav-item pe-3 ${styles.item}`}>
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className={`nav-item pe-3 ${styles.item}`}>
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className={`nav-item pe-3 ${styles.item}`}>
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-auto">
            <div 
              className={`${styles.toggleSwitch} ${theme === "dark" ? styles.dark : ""}`} 
              onClick={toggleTheme}
            >
              <div className={styles.toggleCircle}>
                {theme === "dark" ? <FaMoon className="text-white" /> : <FaSun className="text-warning" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;