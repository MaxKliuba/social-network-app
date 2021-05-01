import React from "react";
import styles from "./FindUsers.module.css";
import UserItem from "./UserItem/UserItem";

let FindUsers = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return (
    <div className="content_box">
      {/* <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p && styles.selected_page}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div> */}

      {props.users.map((el) => (
        <div key={el.id}>
          <UserItem
            user={el}
            disabledFlag={props.followingInProgress.some((id) => id === el.id)}
            toggleFollowingProgress={props.toggleFollowingProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        </div>
      ))}

      {props.currentPage < pagesCount? (
        <div>
          <button
            onClick={() => {
              props.onPageChanged(props.currentPage + 1);
            }}
          >
            NEXT
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FindUsers;
