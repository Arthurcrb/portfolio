import React from 'react';
import styles from "./About.module.css"
import picture from "../../assets/img/photo-identite-arthur-carbonnier-35-45.jpg"

const About = () => {
    return (
        <div className={styles.about}>
            <img
              srcSet={picture}
              alt="Arthur"
              className={styles.picture}
            />
         
            <div className={styles.containerAbout}>Après deux ans de formation en tant que développeur web et intégrateur web, je me spécialise désormais dans le frontend. Passionné, curieux avec une grande soif d'apprendre, j'aime par-dessus tout mettre à profit mon expérience pour de nouveaux projets et relever des défis techniques.</div>
        </div>
    );
};

export default About;