import React from "react";

let FindUsers = (props) => {
  if (props.users.lenght === 0) {
    props.setUsers([
      {
        userId: 1,
        userName: "User Test Name 1",
        userAvatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
        userBirthday: "31.02.2000",
        userCity: "Test-City",
        followed: true,
      },
      {
        userId: 2,
        userName: "User Test Name 2",
        userAvatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
        userBirthday: "31.02.2000",
        userCity: "Test-City",
        followed: false,
      },
      {
        userId: 3,
        userName: "User Test Name 3",
        userAvatar: "https://avatarfiles.alphacoders.com/150/thumb-150316.jpg",
        userBirthday: "31.02.2000",
        userCity: "Test-City",
        followed: false,
      },
    ]);
  }

  return (
    <div className="content_box">
      {props.users.map((el) => (
        <div key={el.userId}>
          <span>
            <div>
              <img src={el.userAvatar} alt="avatar" />
            </div>
            <div>
              {el.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(el.userId);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(el.userId);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{el.userName}</div>
          </span>
          <span>
            <div>{el.userCity}</div>
            <div>{el.userBirthday}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default FindUsers;
