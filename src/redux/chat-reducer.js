const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  chatData: {
    chatId: 0,
    friendId: 2,
    friendName: "Test Friend 2",
    friendAvatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
    messages: [
      {
        messageId: 0,
        userId: 1,
        myMessage: false,
        messageText: "Hi! How are you?",
      },
      {
        messageId: 1,
        userId: 0,
        myMessage: true,
        messageText: "Hi! I am fine)",
      },
      {
        messageId: 2,
        userId: 0,
        myMessage: true,
        messageText: "What about you?",
      },
      {
        messageId: 3,
        userId: 1,
        myMessage: false,
        messageText: "I am fine too)",
      },
    ],
  },
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessageBody = action.newMessageBody;

      let newMessage = {
        messageId: 0,
        userId: 0,
        myMessage: true,
        messageText: newMessageBody,
      };

      return {
        ...state,
        chatData: {
          ...state.chatData,
          messages: [...state.chatData.messages, newMessage],
        },
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};

export default chatReducer;
