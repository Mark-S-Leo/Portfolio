import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Experience.module.scss';
import Skill from './Skill/Skill.jsx';


export default function Experience() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchedSkills = [
            { skill: 'HTML', experience: 'Intermediate' },
            { skill: 'CSS', experience: 'Intermediate' },
            { skill: 'JavaScript', experience: 'Basic' },
            { skill: 'React', experience: 'Basic' },
            { skill: 'Bootstrap', experience: 'Intermediate' },
            {skill: 'Git', experience:'Basic'},
        ];
        setSkills(fetchedSkills);
    }, []);

    return (
        <div className="container py-5">
            <p className='text-center mb-0'>Explore my</p>
            <h1 className='text-center mb-4 bold'>Experience</h1>
            <div className="row">
                {skills.map((skill, index) => (
                    <div key={index} className="col-sm-6 col-md-4 mb-4">
                        <Skill skill={skill.skill} experience={skill.experience} />
                    </div>
                ))}
            </div>
        </div>
    );
}