import React, { useState, useEffect } from "react";
import Project from "./Project/Project.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./Projects.module.scss";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Projects({ theme }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchedProjects = [
      { id: 1, title: "Project 1", image: '/Project_Image/Pure_blue.webp', gitHub:"", view:""},
      { id: 2, title: "Project 2", image: '/Project_Image/Pure_blue.webp', gitHub:"", view:""},
      { id: 3, title: "Project 3", image: '/Project_Image/Pure_blue.webp', gitHub:"", view:""},
    ];
    setProjects(fetchedProjects);
  }, []);

  return (
    <div className="container">
      <p className="text-center mb-0">Browse My Recent</p>
      <h1 className="text-center mb-3">Projects</h1>
      <div className="row align-items-center justify-content-center">
        <div id="carouselExampleIndicators" className={`carousel slide ${styles.carousel}`}
             data-bs-ride="carousel" data-bs-theme={theme === 'dark' ? 'light' : 'dark'}>
          <ul className={`carousel-indicators ${styles.carouselIndicators}`}>
            {projects.map((project, index) => (
              <li
                key={project.id}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ul>
          <div className={`carousel-inner ${styles.carouselInner}`}>
            {projects.map((project, index) => (
              <div key={project.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <Project title={project.title} image={project.image} gitHub={project.gitHub} view={project.view} />
              </div>
            ))}
            <a className={`carousel-control-prev ${styles.carouselControl}`}
           href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className={` ${styles.control}`} aria-hidden="true"><GrFormPrevious /></span>
          </a>
          <a className={`carousel-control-next ${styles.carouselControl}`}
           href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className={`${styles.control}`} aria-hidden="true"><GrFormNext /></span>
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Projects;