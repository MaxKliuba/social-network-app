import { Redirect, Route, Switch, withRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import React from "react";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";

const DialogsListContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsList/DialogsListContainer")
);
const ChatContainer = React.lazy(() =>
  import("./components/Dialogs/Chat/ChatContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert(`Error message: ${reason.reason.message}`);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection".this.catchAllUnhandledErrors
    );
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
          <Switch>
            <Route path="/login" render={withSuspense(Login)} />
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route
              exact
              path="/dialogs"
              render={withSuspense(DialogsListContainer)}
            />
            <Route
              exact
              path="/dialogs/1"
              render={withSuspense(ChatContainer)}
            />
            <Route
              path="*"
              render={() => <div className="content_box">404 Not found</div>}
            />
          </Switch>
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

// basename={process.env.PUBLIC_URL}

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
