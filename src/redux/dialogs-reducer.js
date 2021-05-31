let initialState = {
  dialogsItems: [
    {
      dialogId: 1,
      friendId: 1,
      friendName: "Test Friend 1",
      friendAvatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
      lastMessage: "I am fine too)",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  return state;
};

export default dialogsReducer;
