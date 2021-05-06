import React from "react";
import styles from "./Post.module.css";
import userPhoto from "../../../../assets/images/userPhoto.jpg"

function Post(props) {
  return (
    <div className={styles.post_box}>
      <img
        className={styles.user_avatar}
        src={
          props.userAvatar != null
            ? props.userAvatar
            : userPhoto
        }
        alt="avatar"
      ></img>
      <div className={styles.edit_button}>
        <div className={styles.edit_button_content}></div>
      </div>
      <div className={styles.post_header}>
        <div className={styles.user_name}>{props.userName}</div>
        <div className={styles.post_datetime}>{props.postDatetime}</div>
      </div>
      <div className={styles.post_content}>
        <span>{props.postText}</span>
      </div>
      <div className={styles.post_footer}>
        <div className={styles.like_button} onClick={() => console.log("like")}>
          <span className={styles.like_text}>{props.like}</span>
          <div className={styles.heart}></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
