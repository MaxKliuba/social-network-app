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
      chatData: [
        {
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
        },
      ],
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
    if (action.type === "ADD-POST") {
      this._state.profilePage.newPostText = this._state.profilePage.newPostText.trim();

      if (this._state.profilePage.newPostText.length > 0) {
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
          user_id: this._state.profilePage.userData.id,
          user_name: this._state.profilePage.userData.name,
          user_avatar: this._state.profilePage.userData.avatar,
          datetime: dateTimeNow,
          text: this._state.profilePage.newPostText,
          like: 0,
        };

        this._state.profilePage.postsData.unshift(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
      }
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
