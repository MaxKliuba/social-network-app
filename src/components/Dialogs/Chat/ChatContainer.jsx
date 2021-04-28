import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../../redux/chat-reducer";
import Chat from "./Chat";

let mapStateToProps = (state) => {
  return {
    chatPage: state.chatPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    newMessageChange: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
