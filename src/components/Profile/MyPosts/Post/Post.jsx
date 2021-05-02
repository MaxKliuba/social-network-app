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
        <h4 className={styles.user_name}>{props.userName}</h4>
        <h6 className={styles.post_datetime}>{props.postDatetime}</h6>
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
