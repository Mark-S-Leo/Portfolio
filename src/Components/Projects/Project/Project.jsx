import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./Project.module.scss";

function Project(props) {
  const title = props.title;
  const gitHub = props.gitHub;
  const view = props.view;
  return (
    <div className={styles.slide}>
      <div className={styles.imgContainer}>
        <img src={props.image} alt={props.title} className={styles.img} />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <a href={gitHub}><button className={` ${styles.button}`}>GitHub</button></a>
        <a href={view}><button className={` ${styles.button}`}>View</button></a>
      </div>
    </div>
  );
}

export default Project;