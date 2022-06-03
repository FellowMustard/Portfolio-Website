import React, { useState } from "react";
import styles from "../styles/Home.module.css";
function Homepage() {
  return (
    <section className={styles.homeSection}>
      <div className={styles.leftHome}>
        <div className={styles.nameSection}>
          <p>hello!</p>
          <div className={styles.name}>
            <p> My Name is: </p>
            <p className={styles.typingEffect}>
              <span className={styles.typingColor}>Rachmawan</span>
            </p>
            <span>.</span>
          </div>
          <div className={styles.skillContainer}>
            <div className={`${styles.skillCapsule} ${styles.capsuleOrange}`}>
              Website Developer
            </div>
            <div className={`${styles.skillCapsule} ${styles.capsuleViolet}`}>
              Game Developer
            </div>
            <div className={`${styles.skillCapsule} ${styles.capsuleEmerald}`}>
              3D Artist
            </div>
          </div>
          <section className={styles.buttonSection}>
            <a href="#sectionContact">
              <button className={styles.contactButton}>Contact Me</button>
            </a>
          </section>
        </div>
      </div>
      <div className={styles.rightHome}></div>
    </section>
  );
}

export default Homepage;
