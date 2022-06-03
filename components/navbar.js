import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "../styles/Navbar.module.css";
import { motion } from "framer-motion";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { MdSettingsSuggest } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
import { useTheme } from "next-themes";

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = useCallback((node) => {
    if (node !== null) {
      if (node.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeChecked = (e) => {
    let currentTheme = e.target.checked ? "dark" : "light";
    setTheme(currentTheme);
  };
  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className={styles.navbarContainer}
    >
      <div className={styles.themeSection}>
        <input
          ref={switchTheme}
          id="themeSwitch"
          type="checkbox"
          defaultChecked
          onChange={(e) => themeChecked(e)}
        ></input>
        <p>Theme :</p>
        <div className={styles.themeSlider}>
          <p
            className={`${styles.sliderDark} . ${
              theme === "light" ? "" : styles.active
            }`}
          >
            Dark
          </p>
          <p
            className={`${styles.sliderLight} . ${
              theme === "light" ? styles.active : ""
            }`}
          >
            Light
          </p>
        </div>
      </div>
      <div className={styles.navButtons}>
        <a href="#sectionHome">
          <button className={`${styles.navButton} . ${styles.orangeButton}`}>
            <AiFillHome />
            <span>Home</span>
          </button>
        </a>

        <a href="#sectionAbout">
          <button className={`${styles.navButton} . ${styles.blueButton}`}>
            <BsFillPersonLinesFill />
            <span>About</span>
          </button>
        </a>

        <a href="#sectionSkill">
          <button className={`${styles.navButton} . ${styles.redButton}`}>
            <MdSettingsSuggest />
            <span>Skills</span>
          </button>
        </a>

        <a href="#sectionExp">
          <button className={`${styles.navButton} . ${styles.goldButton}`}>
            <GiRoundStar />
            <span>Experience</span>
          </button>
        </a>

        <a href="#sectionContact">
          <button className={`${styles.navButton} . ${styles.greenButton}`}>
            <AiFillMail />
            <span>Contact</span>
          </button>
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
