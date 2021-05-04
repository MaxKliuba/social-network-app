import { Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import DialogsListContainer from "./components/Dialogs/DialogsList/DialogsListContainer";
import ChatContainer from "./components/Dialogs/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

function App(props) {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app_wrapper_content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route exact path="/dialogs" render={() => <DialogsListContainer />} />
        <Route exact path="/dialogs/1" render={() => <ChatContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
