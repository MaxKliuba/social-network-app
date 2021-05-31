import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { sendMessage, afterSubmit } from "../../../redux/chat-reducer";
import Chat from "./Chat";

let mapStateToProps = (state) => {
  return {
    chatPage: state.chatPage,
  };
};

export default compose(
  connect(mapStateToProps, { sendMessage, afterSubmit }),
  withAuthRedirect
)(Chat);
