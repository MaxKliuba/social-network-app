import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../logo.svg";
import styles from "./Header.module.css";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

function Header(props) {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>Neuron</h1>

      <div className={styles.header_button}>
        {props.isAuth ? (
          <Dropdown as={ButtonGroup}>
            <NavLink to="/profile">
              <Button variant="secondary">{props.login}</Button>
            </NavLink>

            <Dropdown.Toggle
              split
              variant="secondary"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="/settings">Settings</Dropdown.Item>
              <Dropdown.Item href="/logout">Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <NavLink to="/login">
            <Button variant="primary">Login</Button>
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
