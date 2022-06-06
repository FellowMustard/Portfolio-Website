import React, { useState } from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import { IoIosPin } from "react-icons/io";

function About() {
  return (
    <main className={styles.aboutSection}>
      <motion.section
        initial={{ y: 460, x: 0, scale: 2 }}
        animate={{ y: 0, x: -390, scale: 1 }}
        transition={{ delay: 1.5 }}
        className={styles.earth}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -400 }}
          transition={{ duration: 3.5, delay: 0.5 }}
          className={styles.earthContent}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.8 }}
          className={styles.pinMap}
        >
          <IoIosPin className={styles.pinSvg}></IoIosPin>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default About;
