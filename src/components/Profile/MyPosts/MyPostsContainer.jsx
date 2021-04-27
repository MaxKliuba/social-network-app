import React from "react";
import { connect } from "react-redux";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    newPostChange: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
