import React from "react";
import logo from "./../../logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>Neuron</h1>
      <div className={styles.menu_button}>
        <div className={styles.menu_button_content}></div>
      </div>
    </header>
  );
}

export default Header;
