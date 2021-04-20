import { Route } from "react-router";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
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
          render={() => <Profile profilePage={props.state.profilePage} />}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs dialogsData={props.state.dialogsData} />}
        />
      </div>
    </div>
  );
}

export default App;
