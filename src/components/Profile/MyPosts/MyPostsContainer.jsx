import React from "react";
import { connect } from "react-redux";
import { addPost, afterSubmit } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  afterSubmit,
})(MyPosts);

export default MyPostsContainer;
