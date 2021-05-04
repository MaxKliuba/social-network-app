import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Chat);
