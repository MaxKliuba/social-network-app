import profileReducer from "./profile-reducer";
import chatReducer from "./chat-reducer";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogsItems: [
        {
          id: 1,
          friend_id: 1,
          friend_name: "Test Friend 1",
          friend_avatar:
            "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
          last_message:
            "lol1zkjchsakjcbskjcbkjscbjh asc jhs assajh asgdasjh dgasuydgas jh awduyd ad aud aw ad auyd auydwudgeygseyfg sdjf d fsdjh sdjg fhjsdgf jhsd fjhsdgf jhsdgf sjf js fe fjsef g syesjh jh bsjf gaufsye gf sejhsej ge hsgf )",
        },
        {
          id: 2,
          friend_id: 2,
          friend_name: "Test Friend 2",
          friend_avatar:
            "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
          last_message: "Lol)",
        },
      ],
    },
    chatPage: {
      chatData: {
        id: 0,
        friend_id: 2,
        friend_name: "Test Friend 2",
        friend_avatar:
          "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
        messages: [
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
          {
            id: 0,
            my_message: false,
            message: "Hi! How are you?",
          },
          {
            id: 1,
            my_message: true,
            message: "Hi! I am fine)",
          },
          {
            id: 2,
            my_message: true,
            message: "What about you?",
          },
          {
            id: 3,
            my_message: false,
            message: "I am fine too)",
          },
        ],
        newMessageText: "",
      },
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {},

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.chatPage = chatReducer(this._state.chatPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
