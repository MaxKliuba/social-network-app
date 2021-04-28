import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogsItem.module.css";

function DialogsItem(props) {
  return (
    <div className={styles.dialog_item_box}>
      <div className={styles.edit_button}>
        <div className={styles.edit_button_content}></div>
      </div>
      <NavLink to={"dialogs/" + props.friendId}>
        <img
          className={styles.friend_avatar}
          src={props.friendAvatar}
          alt="avatar"
        ></img>

        <div className={styles.dialog_item_header}>
          <h4 className={styles.friend_name}>{props.friendName}</h4>
        </div>
        <div className={styles.dialog_item_content}>
          <p>{props.lastMessage}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default DialogsItem;
