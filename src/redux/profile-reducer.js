const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  userData: {
    id: 0,
    status: "Online",
    name: "User Test Name",
    avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
    birthday: "31.02.2000",
    city: "Test-City",
  },
  postsData: [],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      state.newPostText = state.newPostText.trim();

      if (state.newPostText.length > 0) {
        let digitFormat = (digit) => {
          return digit.toString().length < 2 ? "0" + digit : digit;
        };
        let today = new Date();
        let dateTimeNow =
          digitFormat(today.getHours()) +
          ":" +
          digitFormat(today.getMinutes()) +
          " " +
          digitFormat(today.getDate()) +
          "." +
          digitFormat(today.getMonth() + 1) +
          "." +
          today.getFullYear();

        let newPost = {
          id: 0,
          user_id: state.userData.id,
          user_name: state.userData.name,
          user_avatar: state.userData.avatar,
          datetime: dateTimeNow,
          text: state.newPostText,
          like: 0,
        };

        return {
          ...state,
          newPostText: "",
          postsData: [newPost, ...state.postsData],
        };
      }

      return {
        ...state,
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
