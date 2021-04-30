import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import chatReducer from "./chat-reducer";
import findUsersReducer from "./find-users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  chatPage: chatReducer,
  findUsersPage: findUsersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
