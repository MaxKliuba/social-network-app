import React from "react";
import { connect } from "react-redux";
import DialogsList from "./DialogsList";

let mapStateToProps = (state) => {
  return {
    dialogsItems: state.dialogsPage.dialogsItems,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const DialogsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsList);

export default DialogsListContainer;
