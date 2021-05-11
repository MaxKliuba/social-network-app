import { Route, withRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DialogsListContainer from "./components/Dialogs/DialogsList/DialogsListContainer";
import ChatContainer from "./components/Dialogs/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import React from "react";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app_wrapper_content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route
            exact
            path="/dialogs"
            render={() => <DialogsListContainer />}
          />
          <Route exact path="/dialogs/1" render={() => <ChatContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
