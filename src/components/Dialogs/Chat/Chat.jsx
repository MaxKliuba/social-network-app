import { NavLink } from "react-router-dom";
import styles from "./Chat.module.css";

const Message = (props) => {
  if (props.my_message == true) {
    return (
      <div className={styles.my_message_box}>
        <p className={styles.my_message}>{props.message}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.friend_message_box}>
        <p className={styles.friend_message}>{props.message}</p>
      </div>
    );
  }
};

function Chat(props) {
  let messagesElements = props.chatData.messages.map((el) => {
    return (
      <Message id={el.id} my_message={el.my_message} message={el.message} />
    );
  });

  return (
    <div className={styles.chat_box}>
      <div className={styles.chat_header}>
        <div>
          <NavLink to="/dialogs" className={styles.back_button}></NavLink>
        </div>
        <img
          className={styles.friend_avatar}
          src={props.chatData.friend_avatar}
          alt="avatar"
        ></img>
        <h3 className={styles.friend_name}>{props.chatData.friend_name}</h3>
      </div>
      <div className={styles.chat_content}>{messagesElements}</div>
      <div className={styles.chat_footer}>
        <div>
          <div>
            <textarea
              className={styles.textarea}
              // ref={newMessageElement}
              // onChange={onMessageChange}
              maxLength="5000"
              placeholder="Message"
              // value={props.newMessageText}
            ></textarea>
          </div>
          <button
            className={styles.textarea_button}
            // ref={textareaButton}
            // onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;