import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserItem.module.css";
import userPhoto from "../../../assets/images/userPhoto.jpg";
import { usersAPI } from "../../../api/api";

function UserItem(props) {
  return (
    <div className={styles.user_item_box}>
      <div className={styles.user_avatar_block}>
        <NavLink to={"/profile/" + props.user.id}>
          <img
            className={styles.user_avatar}
            src={
              props.user.photos.small != null
                ? props.user.photos.small
                : userPhoto
            }
            alt="avatar"
          />
        </NavLink>
      </div>
      <div className={styles.user_info_block}>
        <div className={styles.user_name}>{props.user.name}</div>
        <div className={styles.user_status}>{props.user.status}</div>
      </div>

      <div className={styles.user_button_block}>
        {props.user.followed ? (
          <button
            className={`${styles.user_button} ${styles.unfollow_button} ${
              props.disabledFlag ? styles.disabled_button : null
            }`}
            disabled={props.disabledFlag}
            onClick={() => {
              props.unfollow(props.user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={`${styles.user_button} ${styles.follow_button} ${
              props.disabledFlag ? styles.disabled_button : null
            }`}
            disabled={props.disabledFlag}
            onClick={() => {
              props.follow(props.user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default UserItem;
