import React from "react";
import styles from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div>
      <h3 className={styles.status}>{props.userData.userStatus}</h3>
      <div className="content_box">
        <img
          className={styles.avatar}
          src={props.userData.userAvatar}
          alt="avatar"
        ></img>
        <div className={styles.profile_info}>
          <h2 className={styles.user_name}>{props.userData.userName}</h2>
          <div className={styles.group}>
            <label className={styles.group_label}>City:</label>
            <span className={styles.group_text}>{props.userData.userCity}</span>
          </div>
          <div className={styles.group}>
            <label className={styles.group_label}>Birthday:</label>
            <span className={styles.group_text}>{props.userData.userBirthday}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
