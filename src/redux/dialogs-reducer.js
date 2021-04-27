let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  return state;
};

export default dialogsReducer;
