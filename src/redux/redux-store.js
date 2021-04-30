import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import chatReducer from "./chat-reducer";
import findUsersReducer from "./find-users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  chatPage: chatReducer,
  findUsersPage: findUsersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
