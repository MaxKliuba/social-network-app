import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";

let mapStateToProps = (state) => {
  return {
    userData: state.profilePage.userData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const ProfileInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfo);

export default ProfileInfoContainer;
