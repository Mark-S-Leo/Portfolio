import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Footer.module.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <div className={styles.navLinks}>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="col-12">
            <p className="mt-2">{`Copyright © ${year} Swan Yee Htet. All Rights Reserved.`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;