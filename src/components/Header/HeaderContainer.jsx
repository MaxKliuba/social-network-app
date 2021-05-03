import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, { getAuthUserData })(
  HeaderContainer
);
