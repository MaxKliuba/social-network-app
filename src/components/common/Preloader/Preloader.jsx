import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import styles from "./Preloader.module.css";

let Preloader = () => {
  return (
    <div className={styles.preloader_box}>
      <img src={preloader} alt="preloader" className={styles.preloader} />
    </div>
  );
};

export default Preloader;
