import React from "react";
import styles from "./ReadingCard.module.css";
//import { getImageUrl } from "../../utils";

const getImageUrl = (imageName) => {
    return new URL(`../../assets/reading/${imageName}`, import.meta.url).href;
};

export const ReadingCard = ({
    book: { title, author, image}, }) => {
    return (
        <div className={styles.container}>
            <img
                alt= {title}
                className={styles.image}
                src={getImageUrl(image)}
            />
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>By: {author}</h3>
        </div>
    );
};