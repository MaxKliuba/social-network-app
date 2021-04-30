import { Route } from "react-router";
import "./App.css";
import AllDialogsContainer from "./components/Dialogs/AllDialogs/AllDialogsContainer";
import ChatContainer from "./components/Dialogs/Chat/ChatContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app_wrapper_content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route exact path="/dialogs" render={() => <AllDialogsContainer />} />
        <Route exact path="/dialogs/1" render={() => <ChatContainer />} />
        <Route path="/find-users" render={() => <FindUsersContainer />} />
      </div>
    </div>
  );
}

export default App;
