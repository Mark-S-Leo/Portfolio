import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagramSquare, FaLine, FaChevronDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './ContactMe.module.scss';

function ContactMe() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div id="contact-me" className="container-fluid"> {/* Add id attribute here */}
      <p className="text-center mb-0 mt-5">Get in Touch</p>
      <h1 className="text-center">Contact Me</h1>

      <div className="row align-items-center justify-content-center">
        <div className={`col-md-12 ${styles.row}`}>
          <a href="mailto:marksleo321@gmail.com" className={styles.contact}>
            <FaEnvelope className="me-3" />
            <span className={styles.contactText}>marksleo321@gmail.com</span>
          </a>
          <a href="https://github.com/Mark-S-Leo" className={styles.contact}>
            <FaGithub className="me-3" />
            <span className={styles.contactText}>GitHub</span>
          </a>

          <div 
               className={styles.showMore} 
                onClick={() => setShowSocial(!showSocial)}
          >
              <span className={styles.socialText}>{showSocial ? "Hide Socials" : "Show More"}</span>
              <FaChevronDown className={showSocial ? styles.rotated : styles.arrow} />
          </div>

        </div>
      </div>

      <div className={`${styles.socialPanel} ${showSocial ? styles.active : ""}`}>
        <a href="https://twitter.com/Mark_S_Leo" target="_blank" className={styles.social}>
          <FaTwitter className="me-2" /> <span>Twitter</span>
        </a>
        <a href="https://linkedin.com/in/swan-yee-htet-65804b33a/" target="_blank" className={styles.social}>
          <FaLinkedin className="me-2" /> <span>LinkedIn</span>
        </a>
        <a href="https://www.facebook.com/marks.impire/" target="_blank" className={styles.social}>
          <FaFacebook className="me-2" /> <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/mark_s_leo/" target="_blank" className={styles.social}>
          <FaInstagramSquare className="me-2" /> <span>Instagram</span>
        </a>
        <a href="https://line.me/ti/p/nqRyqseQqc" target="_blank" className={styles.social}>
          <FaLine className="me-2" /> <span>Line</span>
        </a>
      </div>
    </div>
  );
}

export default ContactMe;