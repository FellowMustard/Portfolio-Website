import React, { useState, useEffect } from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import { IoIosPin } from "react-icons/io";
import Image from "next/image";
import earthImg from "../public/static/earth.png";

function About() {
  const hoverSpanAbout = {
    hover: {
      scale: 1.7,
      transition: { duration: 0.3, type: "spring", stiffness: 450 },
      color: ["#7299cc", "#34b5d9"],
      rotate: -25,
    },
  };
  const hoverSpanIndo = {
    hover: {
      scale: 1.7,
      transition: { duration: 0.3, type: "spring", stiffness: 450 },
      color: ["#f70000", "#961515"],
      rotate: 25,
    },
  };
  const hoverSpanMiddle = {
    hover: {
      scale: 1.7,
      transition: { duration: 0.3, type: "spring", stiffness: 450 },
      rotate: 25,
      color: ["transparent", "transparent"],
    },
  };
  const hoverSpanEsia = {
    hover: {
      scale: 1.7,
      transition: { duration: 0.3, type: "spring", stiffness: 450 },
      color: ["#f7f7f7", "#ebebeb"],
      rotate: 25,
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
        initial={{ x: 570, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          type: "spring",
          stiffness: 150,
        }}
        className={styles.aboutParagraph}
      >
        <div className={styles.springText}>
          <motion.div variants={hoverSpanAbout} whileHover="hover">
            A
          </motion.div>
          <motion.div variants={hoverSpanAbout} whileHover="hover">
            b
          </motion.div>
          <motion.div variants={hoverSpanAbout} whileHover="hover">
            o
          </motion.div>
          <motion.div variants={hoverSpanAbout} whileHover="hover">
            u
          </motion.div>
          <motion.div variants={hoverSpanAbout} whileHover="hover">
            t
          </motion.div>
          <div className={styles.blankSpace}></div>
          <motion.div variants={hoverSpanAbout} whileHover="hover">
            M
          </motion.div>
          <motion.div variants={hoverSpanAbout} whileHover="hover">
            e
          </motion.div>
          <motion.div variants={hoverSpanAbout} whileHover="hover">
            ,
          </motion.div>
        </div>

        <div className={styles.aboutTextContent}>
          <div>
            I was born and raised in a city called Batam located in
            <span className={styles.springText}>
              <motion.div variants={hoverSpanIndo} whileHover="hover">
                I
              </motion.div>
              <motion.div variants={hoverSpanIndo} whileHover="hover">
                n
              </motion.div>
              <motion.div variants={hoverSpanIndo} whileHover="hover">
                d
              </motion.div>
              <motion.div variants={hoverSpanIndo} whileHover="hover">
                o
              </motion.div>
              <motion.div
                className={styles.flagGradient}
                variants={hoverSpanMiddle}
                whileHover="hover"
              >
                n
              </motion.div>
              <motion.div variants={hoverSpanEsia} whileHover="hover">
                e
              </motion.div>
              <motion.div variants={hoverSpanEsia} whileHover="hover">
                s
              </motion.div>
              <motion.div variants={hoverSpanEsia} whileHover="hover">
                i
              </motion.div>
              <motion.div variants={hoverSpanEsia} whileHover="hover">
                a
              </motion.div>
            </span>
            .
          </div>
          <div>
            I love to learn something new to improve myself to become a better
            programmer and better person.
          </div>
          <div>I am currently learning more about ...</div>
        </div>
      </motion.div>
    </main>
  );
}

export default About;
