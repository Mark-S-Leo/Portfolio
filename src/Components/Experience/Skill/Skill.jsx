import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Skill.module.scss';
import iconMap from './SkillIcon';

export default function Skill(props) {
    const { skill, experience } = props;

    const getIcon = (skill) => {
        const formattedSkill = skill.replace(/\s+/g, '').replace(/\./g, '').replace(/(?:^|\s|\.)(\w)/g, (_, c) => c ? c.toUpperCase() : '');
        const iconName = `Fa${formattedSkill}`;
        const IconComponent = iconMap[skill]?.icon || iconMap[iconName]?.icon || iconMap.Default.icon;
        const color = iconMap[skill]?.color || iconMap[iconName]?.color || iconMap.Default.color;
        return <IconComponent className={styles.icon} style={{ color }} />;
    };

    return (
        <div className={`card shadow-sm rounded-2xl text-center p-4 transition-transform hover:scale-105 ${styles.card}`}>
            <div className="card-body">
                {getIcon(skill)}
                <h3 className={`card-title font-bold text-lg mt-2 ${styles.skill} `}>{skill}</h3>
                <p className="card-text text-gray-500 text-sm">{experience}</p>
            </div>
        </div>
    );
}