import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
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

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
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
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.add_message_box}>
        <div className={styles.add_message_box}>
          <Field
            component="textarea"
            name="newMessageBody"
            placeholder="Message"
            className={styles.textarea}
          />
        </div>
        <button className={styles.textarea_button}>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Chat;
