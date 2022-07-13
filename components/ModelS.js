import React from "react";
import styles from "../styles/Home.module.css";
import Reveal from "react-reveal/Reveal";

const ModeS = () => {
  return (
    <section className={styles.section}>
      <Reveal effect="fadeInUp">
        <div className={styles.textsArea}>
          <h3>Model S</h3>
          <p>
            Order Online for{" "}
            <span className={styles.touchless}> Touchless Delivery</span>
          </p>
        </div>
      </Reveal>

      <Reveal effect="fadeInUp2">
        <div className={styles.buttons}>
          <div className={styles.btnMain}>
            <a href="#" className={styles.btn}>
              custom order
            </a>
            <a href="#" className={styles.btn}>
              existing inventor
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ModeS;
