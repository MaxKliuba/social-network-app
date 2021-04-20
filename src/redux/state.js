let state = {
  profilePage: {
    userData: {
      id: 0,
      status: "Online",
      name: "User Test Name",
      avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
      birthday: "31.02.2000",
      city: "Test-City",
    },
    postsData: [
      {
        id: 0,
        user_id: 0,
        user_name: "User Test Name",
        user_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
        datetime: "17:21 19.04.2021",
        text: "test post 1",
        like: 100000000000000000000,
      },
      {
        id: 1,
        user_id: 0,
        user_name: "User Test Name",
        user_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
        datetime: "17:21 19.04.2021",
        text: "test post 2",
        like: 10,
      },
    ],
    newPostText: "",
  },
  dialogsPage: {},
};

let rerenderEntireTree = () => {};

export const addPost = () => {
  let newPost = {
    id: 0,
    user_id: 0,
    user_name: "User Test Name",
    user_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
    datetime: "17:21 19.04.2021",
    text: state.profilePage.newPostText,
    like: 0,
  };

  state.profilePage.postsData.unshift(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
