import React from "react";
import { connect } from "react-redux";
import AllDialogs from "./AllDialogs";

let mapStateToProps = (state) => {
  return {
    dialogsItems: state.dialogsPage.dialogsItems,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const AllDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllDialogs);

export default AllDialogsContainer;
