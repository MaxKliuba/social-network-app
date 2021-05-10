import React from "react";
import profileReducer, {
  addPostCreator,
  deletePostCreator,
} from "./profile-reducer";

let state = {
  profile: {
    fullName: "Test User",
    userId: 0,
    photos: {
      small: null,
      large: null,
    },
  },
  postsData: [
    {
      postId: 0,
      userId: 0,
      userName: "Test User",
      userAvatar: null,
      postText: "newPostText",
      like: 0,
    },
  ],
};

it("length of posts should be incremented", () => {
  const postText = "test post text";
  let action = addPostCreator(postText);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(2);
});

it("text of new post should be correct", () => {
  const postText = "test post text";
  let action = addPostCreator(postText);

  let newState = profileReducer(state, action);

  expect(newState.postsData[0].postText).toBe(postText);
});

it("after deleting length of posts should be decremented", () => {
  const postText = "test post text";
  let action = deletePostCreator(0);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(1);
});

it("after deleting length of posts shouldn't be decremented if id is incorrect", () => {
  const postText = "test post text";
  let action = deletePostCreator(-1);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(1);
});
