import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Profile.module.scss';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Profile() {
  return (
    <div className={`container align-items-center justify-content-center ${styles.container}`}>
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className={`col-md-5 ${styles.profileImageContainer}`}>
          <img src={"./Profile.jpg"} alt="profile" className={`img-fluid ${styles.profileImage}`} />
        </div>
        <div className="col-md-6">
          <h2 className={styles.text}>Swan Yee Htet</h2>
          <p className={styles.text}>Front-end Developer</p>
          <button type="button" className={styles.button1} onClick={() => window.open('/assets/Swan_Yee_Htet_CV_Form.pdf', '_blank')}>Download CV</button>
          <a href="#contact">
            <button type='button' className={styles.button2}>Contact Info</button>
          </a><br />
          <section className={`mt-2 mb-5`}>
            <a href='https://www.linkedin.com/in/swan-yee-htet-65804b33a/'><FaLinkedin className={styles.social} /></a>
            <a href='https://github.com/Mark-S-Leo'><FaGithubSquare className={styles.social} /></a>
            <a href='https://www.instagram.com/mark_s_leo/'><FaSquareInstagram className={styles.social} /></a>
            <a href='https://www.facebook.com/marks.impire/'><FaFacebookSquare className={styles.social} /></a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profile;