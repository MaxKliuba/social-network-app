import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../../redux/chat-reducer";
import StoreContext from "../../../StoreContext";
import Chat from "./Chat";

function ChatContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().chatPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (text) => {
          store.dispatch(updateNewMessageTextCreator(text));
        };

        return (
          <Chat
            chatPage={state}
            sendMessage={onSendMessageClick}
            newMessageChange={onNewMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default ChatContainer;
