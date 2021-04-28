const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    
  ],
};

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.userId === action.userId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.userId === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followCreator = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};

export const unfollowCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};

export const setUsersCreator = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export default findUsersReducer;
