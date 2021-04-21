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
    dialogsPage: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  addPost() {
    this._state.profilePage.newPostText = this._state.profilePage.newPostText.trim();

    if (this._state.profilePage.newPostText.length > 0) {
      let digitFormat = (digit) => {
        return digit.toString().length < 2 ? '0' + digit : digit;
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
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
