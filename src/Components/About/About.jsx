import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./About.module.scss";
import { MdWorkHistory } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import AboutMe from "./AboutMe.jsx";

function About() {
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchedExperience = [
            { job: 'Job Example', year: '1' },
            { job: 'Job Example', year: '3+' },
        ];
        setExperience(fetchedExperience);
    }, []);

    useEffect(() => {
        const fetchedEducation = [
            { degree: "IGCSE O' level" },
            {},
            {},
        ];
        setEducation(fetchedEducation);
    }, []);

    return (
        <div className="container">
            <p className="text-center mb-0">Get To Know More</p>
            <h1 className="text-center mt-0 mb-4">About me</h1>
            <div className={`row ${styles.row}`}>
                <div className={`col-md-5 ${styles.imgContainer}`}>
                    <img src="./Project_Image/Pure_blue.webp" alt="profile_picture" className={styles.img}></img>
                </div>
                <div className={`col-md-7 ${styles.rightColumn}`}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.about}>
                            <MdWorkHistory className={styles.icon} />
                            <h4>Experience</h4>
                            {experience.map((exp, index) => (
                                <p key={index} className={styles.content}>{exp.job} {exp.year} year{exp.year !== '1' ? 's' : ''}</p>
                            ))}
                        </div>
                        <div className={styles.about}>
                            <GiGraduateCap className={styles.icon} />
                            <h4>Education</h4>
                            {education.map((edu, index) => (
                                <p key={index} className={styles.content}>{edu.degree}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <AboutMe />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;