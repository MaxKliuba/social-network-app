import React from "react";
import styles from "./FindUsers.module.css";
import userPhoto from "../../assets/images/userPhoto.jpg";
import { NavLink } from "react-router-dom";

let FindUsers = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className="content_box">
      <div>
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
      </div>
      {props.users.map((el) => (
        <div key={el.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + el.id}>
              <img
                src={el.photos.small != null ? el.photos.small : userPhoto}
                alt="avatar"
              />
              </NavLink>
            </div>
            <div>
              {el.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(el.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(el.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{el.name}</div>
          </span>
          <span>
            <div>{el.status}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default FindUsers;
