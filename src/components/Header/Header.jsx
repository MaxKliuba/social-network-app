import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../logo.svg";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>Neuron</h1>

      <div className={styles.header_button}>
        {props.isAuth ? (
          <div>
            <span>{props.login}</span>
          </div>
        ) : (
          <div className={styles.login_button}>
            <NavLink to={"/login"}>Login</NavLink>
          </div>
        )}
      </div>

      {/* <span>{props.login}</span>
          <div className={styles.menu_button}>
            <div className={styles.menu_button_content}></div>
          </div> */}
    </header>
  );
}

export default Header;
