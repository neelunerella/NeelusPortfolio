import React from "react";
import styles from "./ReadingCard.module.css";
import { getImageUrl } from "../../utils";

export const ReadingCard = ({
    book: { title, author, imageSrc}, }) => {
    return (
        <div className={styles.container}>
            <img
                alt= {title}
                className={styles.image}
                src={imageSrc}
            />
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>By: {author}</h3>
        </div>
    );
};