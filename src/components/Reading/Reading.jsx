import React from "react";
import styles from "./Reading.module.css";
import { ReadingCard } from "./ReadingCard";

import currReading from "../../data/readingStill.json";

export const Reading = () => {
    return (
        <section className={styles.container} id = "reading">
            <div className={styles.content}>
                <h1 className={styles.title}>Reading</h1>
                <div className={styles.readingStill}>
                    <h2 className={styles.subtitle}>Currently Reading</h2>
                    {/* It will have a row of books with the title and author underneath so needs ReadingCard*/}
                    <div className={styles.bookWrapper}>
                        {currReading.map((book) => {
                            return <ReadingCard book={book}/>
                        })}
                    </div>
                </div>
                {/*Need to copy over once you finish reading any of the books*/}

            </div>

        </section>
    );
}