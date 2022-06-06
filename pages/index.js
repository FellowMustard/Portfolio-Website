import About from "../components/about";
import Homepage from "../components/homepage";
import Navbar from "../components/navbar";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.contentWrapper}>
        <div className={styles.navComponent}>
          <Navbar />
        </div>
        <div className={styles.pageComponent} id="sectionHome">
          <Homepage />
        </div>
        <div className={styles.pageComponent} id="sectionAbout">
          <About />
        </div>
        <div className={styles.pageComponent} id="sectionSkill">
          skill
        </div>
        <div className={styles.pageComponent} id="sectionPort">
          Portfolio
        </div>
        <div className={styles.pageComponent} id="sectionExp">
          experience
        </div>
        <div className={styles.pageComponent} id="sectionContact">
          contact
        </div>
      </section>
    </main>
  );
}
