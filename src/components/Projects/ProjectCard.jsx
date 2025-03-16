import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
    project: { title, subtitle, description, link, imageSrc}, }) => {
    return (
        <div className={styles.container}>
        <a href={link} className={styles.projectWrapper}>
            <img
                alt={title}
                className={styles.image}
                src={imageSrc}
            />
            <div className={styles.projectOverlay}>
            <p className={styles.projectDescription}>{description}</p>
            </div>
        </a>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
    );
};