let initialState = {
  dialogsItems: [
    {
      dialogId: 1,
      friendId: 1,
      friendName: "Test Friend 1",
      friendAvatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
      lastMessage:
        "lol1zkjchsakjcbskjcbkjscbjh asc jhs assajh asgdasjh dgasuydgas jh awduyd ad aud aw ad auyd auydwudgeygseyfg sdjf d fsdjh sdjg fhjsdgf jhsd fjhsdgf jhsdgf sjf js fe fjsef g syesjh jh bsjf gaufsye gf sejhsej ge hsgf )",
    },
    {
      dialogId: 2,
      friendId: 2,
      friendName: "Test Friend 2",
      friendAvatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
      lastMessage: "LoL)",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  return state;
};

export default dialogsReducer;
