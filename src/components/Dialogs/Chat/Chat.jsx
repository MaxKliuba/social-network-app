import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import styles from "./Chat.module.css";
import {
  maxLengthCreator,
  requiredWithoutMessage,
} from "../../../utils/validators/validators.js";
import { Textarea } from "../../common/FormsControls/FormsControls";

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
    props.afterSubmit();
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

const maxLength = maxLengthCreator(10);

const AddMessageForm = (props) => {
  let buttonOnClick = (e) => {
    e.currentTarget.blur();
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <div tabIndex="0" className={styles.message_creator_box}>
        <Field
          className={styles.textarea}
          name="newMessageBody"
          placeholder="Message"
          component={Textarea}
          validate={[requiredWithoutMessage, maxLength]}
        />
        <div className={styles.message_creator_tools}>
          <button className={styles.textarea_button} onClick={buttonOnClick}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Chat;
