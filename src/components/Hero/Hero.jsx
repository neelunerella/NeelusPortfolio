import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";
import heroImg from "../../assets/hero/heroImage.png";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Neelu Nerella</h1>
            <h2 className={styles.description}>I am passionate about developing the future of technology.</h2>
            <a href="mailto:vnpnerella@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImg} alt="Hero Image" className={styles.heroImg}/>
        
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}