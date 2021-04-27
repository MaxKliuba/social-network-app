import { Route } from "react-router";
import "./App.css";
import AllDialogs from "./components/Dialogs/AllDialogs/AllDialogs";
import Chat from "./components/Dialogs/Chat/Chat";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="app_wrapper_content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          exact path="/dialogs"
          render={() => <AllDialogs dialogsItems={props.state.dialogsPage.dialogsItems} />}
        />
        <Route
          exact path="/dialogs/1"
          render={() => <Chat chatData={props.state.dialogsPage.chatData[0]} />}
        />
      </div>
    </div>
  );
}

export default App;
