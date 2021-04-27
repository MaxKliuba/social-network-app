const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  chatData: {
    id: 0,
    friend_id: 2,
    friend_name: "Test Friend 2",
    friend_avatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
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
          id: 0,
          my_message: true,
          message: state.chatData.newMessageText,
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
