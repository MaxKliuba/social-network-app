import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onAddPost = () => {
          store.dispatch(addPostCreator());
        };

        let onNewPostChange = (text) => {
          store.dispatch(updateNewPostTextCreator(text));
        };

        return (
          <MyPosts
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
            newPostChange={onNewPostChange}
            addPost={onAddPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
