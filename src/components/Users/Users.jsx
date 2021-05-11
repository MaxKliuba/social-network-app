import React from "react";
import styles from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
  return (
    <div className="content_box">
      {props.users.map((el) => (
        <UserItem
          key={el.id}
          user={el}
          disabledFlag={props.followingInProgress.some((id) => id === el.id)}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}

      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
    </div>
  );
};

export default Users;
