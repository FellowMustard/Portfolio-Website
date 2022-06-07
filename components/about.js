import React, { useState, useEffect } from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import { IoIosPin } from "react-icons/io";
import Image from "next/image";
import eartImg from "../public/static/earth.png";

function About() {
  return (
    <main className={styles.aboutSection}>
      <motion.section
        initial={{ y: 460, x: 450, scale: 2 }}
        whileInView={{ y: 0, x: 100, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className={styles.earth}
      >
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: -200 }}
          viewport={{ once: true }}
          transition={{ duration: 3.5, delay: 0.5 }}
          className={styles.earthContent}
        >
          <Image src={eartImg} layout="fill"></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 3.5 }}
          className={styles.pinMap}
        >
          <IoIosPin className={styles.pinSvg}></IoIosPin>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default About;
