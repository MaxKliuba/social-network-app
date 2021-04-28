import React from "react";
import { connect } from "react-redux";
import {
  followCreator,
  setUsersCreator,
  unfollowCreator,
} from "../../redux/find-users-reducer";
import FindUsers from "./FindUsers";

let mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
  };
};

const FindUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsers);

export default FindUsersContainer;
