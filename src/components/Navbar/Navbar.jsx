import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  let navbarData = [
    { id: 0, link: "/profile", text: "Profile", indicator_value: 0 },
    { id: 1, link: "/dialogs", text: "Dialogs", indicator_value: 0 },
    { id: 2, link: "/friends", text: "Friends", indicator_value: 0 },
    { id: 3, link: "/find-users", text: "Find Users", indicator_value: 0 },
  ];

  let navbarElements = navbarData.map((el) => {
    return (
      <div key={el.id} className={styles.item}>
        <NavLink to={el.link} activeClassName={styles.activeLink}>
          {el.text}
          {el.indicator_value > 0 ? (
            <span className={styles.item_indicator}>+{el.indicator_value}</span>
          ) : null}
        </NavLink>
      </div>
    );
  });

  return <nav className={styles.nav}>{navbarElements}</nav>;
}

export default Navbar;
