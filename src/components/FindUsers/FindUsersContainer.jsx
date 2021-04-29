import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  followCreator,
  setCurrentPageCreator,
  setTotalUsersCountCreator,
  setUsersCreator,
  toggleIsFetchingCreator,
  unfollowCreator,
} from "../../redux/find-users-reducer";
import FindUsers from "./FindUsers";
import preloader from "../../assets/images/preloader.gif";
import Preloader from "../common/Preloader/Preloader";

class FindUsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div className="content_box">
            <Preloader />
          </div>
        ) : (
          <FindUsers
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    currentPage: state.findUsersPage.currentPage,
    isFetching: state.findUsersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followCreator(id));
    },
    unfollow: (id) => {
      dispatch(unfollowCreator(id));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageCreator(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountCreator(totalUsersCount));
    },
    toggleIsFetching: (isFerching) => {
      dispatch(toggleIsFetchingCreator(isFerching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer);
