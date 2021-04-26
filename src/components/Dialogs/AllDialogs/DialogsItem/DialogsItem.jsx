import { NavLink } from "react-router-dom";
import styles from "./DialogsItem.module.css";

function DialogsItem(props) {
  return (
    <div className={styles.dialog_item_box}>
        <div className={styles.edit_button}>
          <div className={styles.edit_button_content}></div>
        </div>
      <NavLink to={'dialogs/' + props.friend_id}>
        <img
          className={styles.friend_avatar}
          src={props.friend_avatar}
          alt="avatar"
        ></img>
        
        <div className={styles.dialog_item_header}>
          <h4 className={styles.friend_name}>{props.friend_name}</h4>
        </div>
        <div className={styles.dialog_item_content}>
          <p>{props.last_message}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default DialogsItem;
