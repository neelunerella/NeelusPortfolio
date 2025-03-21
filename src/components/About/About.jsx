import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import img from "../../assets/about/NeeluPic.png";

export const About = () => {
    return <section className={styles.container} id="about">
        <div className={styles.content}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.description}>
            I graduated with a BS in Computer Science from University of Illinois at Chicago in December 2023 and am currently working as a research assistant at UIC's Natural Language Processing Lab. My experience lies in AI, Machine Learning, and Data Science, however, I am also interested in software engineering. I would love to work with robotics and computational astronomy/astrophysics full-time in the near future. I'm currently applying for a graduate CS program for Fall 2025 that I plan on doing part-time in order to improve my AI skills. Feel free to look through my portfolio and see my skills, projects, and reading lists!
            </p>
        </div>
        <img src={img} alt="Neelu Pic" className={styles.aboutImg}/>
        
    </section>
}