const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
    newMessageText: "",
  },
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      state.chatData.newMessageText = state.chatData.newMessageText.trim();

      if (state.chatData.newMessageText.length > 0) {
        let newMessage = {
          messageId: 0,
          userId: 0,
          myMessage: true,
          messageText: state.chatData.newMessageText,
        };

        return {
          ...state,
          chatData: {
            ...state.chatData,
            newMessageText: "",
            messages: [...state.chatData.messages, newMessage],
          },
        };
      }
      return {
        ...state,
        chatData: {
          ...state.chatData,
          newMessageText: "",
        },
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        chatData: {
          ...state.chatData,
          newMessageText: action.newText,
        },
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default chatReducer;
