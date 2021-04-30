import React from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/userPhoto.jpg";
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
  if (!props.profile) {
    return (
      <div className="content_box">
        <Preloader />
      </div>
    );
  }

  return (
    <div>
      <h3 className={styles.status}>Online</h3>
      <div className="content_box">
        <img
          className={styles.avatar}
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
          alt="avatar"
        ></img>
        <div className={styles.profile_info}>
          <h2 className={styles.user_name}>{props.profile.fullName}</h2>
          <div className={styles.group}>
            <label className={styles.group_label}>About me:</label>
            <span className={styles.group_text}>{props.profile.aboutMe}</span>
          </div>
          {/* <div className={styles.group}>
            <label className={styles.group_label}>Birthday:</label>
            <span className={styles.group_text}>
              {props.userData.userBirthday}
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
