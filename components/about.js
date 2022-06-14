import React, { useState, useEffect } from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import { IoIosPin } from "react-icons/io";
import Image from "next/image";
import earthImg from "../public/static/earth.png";

function About() {
  const hoverSpan = {
    hover: {
      scale: 2,
      transition: { duration: 0.3 },
      color: ["#7299cc", "#34b5d9"],
      rotate: 45,
    },
  };
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
          <Image src={earthImg} layout="fill"></Image>
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

      <motion.div
        initial={{ x: 670, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          type: "spring",
          stiffness: 150,
        }}
        className={styles.aboutParagraph}
      >
        <div className={styles.aboutText}>
          <motion.div variants={hoverSpan} whileHover="hover">
            A
          </motion.div>
          <motion.div variants={hoverSpan} whileHover="hover">
            b
          </motion.div>
          <motion.div variants={hoverSpan} whileHover="hover">
            o
          </motion.div>
          <motion.div variants={hoverSpan} whileHover="hover">
            u
          </motion.div>
          <motion.div variants={hoverSpan} whileHover="hover">
            t
          </motion.div>
          <div className={styles.blankSpace}></div>
          <motion.div variants={hoverSpan} whileHover="hover">
            M
          </motion.div>
          <motion.div variants={hoverSpan} whileHover="hover">
            e
          </motion.div>
          <motion.div variants={hoverSpan} whileHover="hover">
            ,
          </motion.div>
        </div>
        <p>
          I was born and raised in a city called Batam located in Indonesia.
        </p>
        <p>
          I love to learn something new to improve myself to become a better
          programmer and better person.
        </p>
        <p>I&apos;m currently learning more about</p>
      </motion.div>
    </main>
  );
}

export default About;
