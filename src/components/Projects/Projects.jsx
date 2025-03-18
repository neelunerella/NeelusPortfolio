import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

import projects from "../../data/projects.json";

export const Projects = () => {
    return (<section className={styles.container} id = "projects">

        <div className={styles.content}>
            <h1 className={styles.title}>Projects</h1>
        </div>
        <div className={styles.projects}>
            {projects.map((project) => {
                return <ProjectCard project={project} />
            })}
        </div>
    </section>
    );
};