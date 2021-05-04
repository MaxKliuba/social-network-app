import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import styles from "./Chat.module.css";

const Message = (props) => {
  return props.myMessage ? (
    <div className={styles.my_message_box}>
      <span className={styles.my_message}>{props.messageText}</span>
    </div>
  ) : (
    <div className={styles.friend_message_box}>
      <span className={styles.friend_message}>{props.messageText}</span>
    </div>
  );
};

function Chat(props) {
  let state = props.chatPage;

  let messagesElements = state.chatData.messages.map((el) => {
    return (
      <Message
        key={el.messageId}
        messageId={el.messageId}
        userId={el.userId}
        myMessage={el.myMessage}
        messageText={el.messageText}
      />
    );
  });

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    props.newMessageChange(e.target.value);
  };

  return (
    <div className={styles.chat_box}>
      <div className={styles.chat_header}>
        <div>
          <NavLink to="/dialogs" className={styles.back_button}></NavLink>
        </div>
        <img
          className={styles.friend_avatar}
          src={state.chatData.friendAvatar}
          alt="avatar"
        ></img>
        <h3 className={styles.friend_name}>{state.chatData.friendName}</h3>
      </div>
      <div className={styles.chat_content}>{messagesElements}</div>
      <div className={styles.chat_footer}>
        <div>
          <div>
            <textarea
              className={styles.textarea}
              // ref={newMessageElement}
              onChange={onNewMessageChange}
              maxLength="5000"
              placeholder="Message"
              value={state.chatData.newMessageText}
            ></textarea>
          </div>
          <button
            className={styles.textarea_button}
            // ref={textareaButton}
            onClick={onSendMessageClick}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
