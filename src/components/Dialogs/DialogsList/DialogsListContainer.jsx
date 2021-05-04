import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import DialogsList from "./DialogsList";

let mapStateToProps = (state) => {
  return {
    dialogsItems: state.dialogsPage.dialogsItems,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsList);
