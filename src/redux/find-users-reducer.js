const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   name: "User Test Name 1",
    //   uniqueUrlName: null,
    //   photos: {
    //     small: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
    //     large: null,
    //   },
    //   status: "I'm neuron :)",
    //   followed: true,
    // },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
      case SET_TOTAL_USERS_COUNT:
        return {
          ...state,
          totalUsersCount: action.totalUsersCount,
        };
        case TOGGLE_IS_FETCHING:
          return {
            ...state,
            isFetching: action.isFetching,
          };
    default:
      return state;
  }
};

export const followCreator = (id) => {
  return {
    type: FOLLOW,
    id: id,
  };
};

export const unfollowCreator = (id) => {
  return {
    type: UNFOLLOW,
    id: id,
  };
};

export const setUsersCreator = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export const setCurrentPageCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};

export const setTotalUsersCountCreator = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount,
  };
};

export const toggleIsFetchingCreator = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

export default findUsersReducer;
