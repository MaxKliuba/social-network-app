import { profileAPI, usersAPI } from "../api/api";

const TOGGLE_IS_FETCHING = "profile/TOGGLE_IS_FETCHING";
const ADD_POST = "profile/ADD_POST";
const DELETE_POST = "profile/DELETE_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SAVE_PHOTO_SUCCEESS = "profile/SAVE_PHOTO_SUCCEESS";

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
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ADD_POST: {
      let newPostText = action.newPostText;

      // let digitFormat = (digit) => {
      //   return digit.toString().length < 2 ? "0" + digit : digit;
      // };
      // let today = new Date();
      // let dateTimeNow =
      //   digitFormat(today.getHours()) +
      //   ":" +
      //   digitFormat(today.getMinutes()) +
      //   " " +
      //   digitFormat(today.getDate()) +
      //   "." +
      //   digitFormat(today.getMonth() + 1) +
      //   "." +
      //   today.getFullYear();

      let newPost = {
        postId: 0,
        userId: state.profile.userId,
        userName: state.profile.fullName,
        userAvatar: state.profile.photos.small,
        // postDatetime: dateTimeNow,
        postText: newPostText,
        like: 0,
      };

      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id != action.postId),
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
    case SAVE_PHOTO_SUCCEESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

export const addPostCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const deletePostCreator = (postId) => {
  return { type: DELETE_POST, postId };
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

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCEESS,
    photos,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  let response = await usersAPI.getProfile(userId);
  dispatch(toggleIsFetching(false));
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch) => {
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    // dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export default profileReducer;
