import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  userData: {
    userId: 0,
    userStatus: "Online",
    userName: "User Test Name",
    userAvatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
    userBirthday: "31.02.2000",
    userCity: "Test-City",
  },
  postsData: [
    // {
    //   postId: null,
    //   userId: null,
    //   userName: null,
    //   userAvatar: null,
    //   postDatetime: null,
    //   postText: null,
    //   like: null,
    // },
  ],
  newPostText: "",
  profile: null,
  // {
  //   "aboutMe": "я круто чувак 1001%",
  //   "contacts": {
  //     "facebook": "facebook.com",
  //     "website": null,
  //     "vk": "vk.com/dimych",
  //     "twitter": "https://twitter.com/@sdf",
  //     "instagram": "instagra.com/sds",
  //     "youtube": null,
  //     "github": "github.com",
  //     "mainLink": null
  //   },
  //   "lookingForAJob": true,
  //   "lookingForAJobDescription": "не ищу, а дурачусь",
  //   "fullName": "samurai dimych",
  //   "userId": 2,
  //   "photos": {
  //     "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
  //     "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
  //   }
  // }
  status: "",
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
          postId: 0,
          userId: state.profile.userId,
          userName: state.profile.fullName,
          userAvatar: state.profile.photos.small,
          postDatetime: dateTimeNow,
          postText: state.newPostText,
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
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
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

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if(response.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
