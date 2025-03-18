import React from "react";

import styles from "./Contact.module.css";
import email from "../../assets/contact/emailIcon.png";
import git from "../../assets/contact/githubIcon.png";
import link from "../../assets/contact/linkedinIcon.png";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={email} alt="Email" />
                    <a href="mailto:vnpnerella@gmail.com">vnpnerella@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={link} alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/neelu-nerella">linkedin.com/in/neelu-nerella</a>
                </li>
                <li className={styles.link}>
                    <img src={git} alt="GitHub" />
                    <a href="https://www.github.com/neelunerella">github.com/neelunerella</a>
                </li>
            </ul>
        </footer>
    )
}