import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../logo.svg";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>Neuron</h1>
      {props.isAuth ? (
        <div>
          <span>{props.login}</span>
          <div className={styles.menu_button}>
            <div className={styles.menu_button_content}></div>
          </div>
        </div>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </header>
  );
}

export default Header;
